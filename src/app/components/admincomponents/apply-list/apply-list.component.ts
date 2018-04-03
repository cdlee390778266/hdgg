import { Component, OnInit, OnDestroy } from '@angular/core';
import { simAnim, shrinkOut } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.css'],
  animations: [simAnim, shrinkOut]
})
export class ApplyListComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private hdStateService: HdStateService) { }

  public data = [];
  public hdState: HdStateInterface;

  showModal(item) {
    var that = this;
    this.nzModalService.open({
      title: '升级确认框',
      content : '您确认要升级此等级？',
      closable: false,
      wrapClassName: 'vertical-center-modal',
      showConfirmLoading: true,
      onOk() {
        return new Promise((resolve) => {
    	  that.httpService.get('/assets/data/orderlist/orderlist.json')
          	.subscribe(res => {
          		that.hdState.applyList.splice(that.data.indexOf(item), 1);
              that.hdStateService.setHdState(that.hdState);
          		resolve();
          	})
        });
      }
    })
  }

  ngOnInit() {
     this.httpService.get('/assets/data/applylist/applylist.json')
      .subscribe(res => {
        this.hdStateService.getHdStateObservable(hdState => {
          this.hdState = hdState;
          if(!this.hdState.applyList) {
            this.data = this.hdState['applyList'] = res.data;
          }else {
            this.data = this.hdState.applyList;
          }
        })
      })
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }

}

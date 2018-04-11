import { Component, OnInit, OnDestroy } from '@angular/core';
import { simAnim, shrinkhwOut } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-ad-upload',
  templateUrl: './ad-upload.component.html',
  styleUrls: ['./ad-upload.component.css'],
  animations: [simAnim, shrinkhwOut]
})
export class AdUploadComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private hdStateService: HdStateService) { }

  public data = [];
  public hdState: HdStateInterface;
  public defaultImage: string = CONFIG.defaultImgUrl;

  showModal(item) {
    var that = this;
    this.nzModalService.open({
      title: '删除确认框',
      content : '您确认此条广告？',
      closable: false,
      wrapClassName: 'vertical-center-modal',
      showConfirmLoading: true,
      onOk() {
        return new Promise((resolve) => {
    	  that.httpService.get('/assets/data/adupload/adupload.json')
          	.subscribe(res => {
          		that.hdState.adList.splice(that.data.indexOf(item), 1);
              that.hdStateService.setHdState(that.hdState);
          		resolve();
          	})
        });
      }
    })
  }

  ngOnInit() {
    this.httpService.get('/assets/data/adupload/adupload.json')
      .subscribe(res => {
        this.hdStateService.getHdStateObservable(hdState => {
            this.hdState = hdState;
            if(!this.hdState.adList) {
              this.data = this.hdState.adList = res.data;
            }else {
              this.data = this.hdState.adList;
            }
        })
      })
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }

}

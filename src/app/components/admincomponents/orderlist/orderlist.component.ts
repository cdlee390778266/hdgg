import { Component, OnInit } from '@angular/core';
import { simAnim, shrinkOut } from '../../../animations';
import { HdStateService } from '../../../service/hd.state.service';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
  animations: [simAnim, shrinkOut]
})
export class OrderlistComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private hdStateService: HdStateService) { }

  public data = [];
  public hdState: HdStateInterface;

  delete(item) {
  	var that = this;
  	this.nzModalService.open({
      title: '删除确认框',
      content : '您确认要删除此订单？',
      closable: false,
      wrapClassName: 'vertical-center-modal',
      showConfirmLoading: true,
      onOk() {
        return new Promise((resolve) => {
          that.httpService.get('/assets/data/orderlist/orderlist.json')
          	.subscribe(res => {
          		that.hdState.orderList.splice(that.data.indexOf(item), 1);
              that.hdStateService.setHdState(that.hdState);
          		resolve();
          	})
        });
      }
    })
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/orderlist/orderlist.json')
      .subscribe(res => {
        this.hdStateService.getHdStateObservable(hdState => {
          this.hdState = hdState;
          if(!this.hdState.orderList) {
            this.data = this.hdState.orderList = res.data;
          }else {
            this.data = this.hdState.orderList;
          }
        })
      })
  }

}

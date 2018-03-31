import { Component, OnInit } from '@angular/core';
import { simAnim, shrinkOut } from '../../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../config';

@Component({
  selector: 'hd-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
  animations: [simAnim, shrinkOut]
})
export class OrderlistComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public data = [];

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
          		that.data.splice(that.data.indexOf(item), 1);
          		resolve();
          	})
        });
      }
    })
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/orderlist/orderlist.json')
      .subscribe(res => this.data = res.data)
  }

}

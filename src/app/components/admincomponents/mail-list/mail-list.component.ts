import { Component, OnInit } from '@angular/core';
import  { simAnim, shrinkOut } from '../../../animations';
import { LoginService } from '../../authcomponents/login/login.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
  animations: [simAnim, shrinkOut]
})
export class MailListComponent implements OnInit {

  constructor(private httpService: HttpService, private loginService: LoginService, private nzModalService: NzModalService) { }

  public data: Object[];

  showModal(item) {
    var that = this;
    this.nzModalService.open({
      title: '删除确认框',
      content : '您确认要删除此联系人？',
      closable: false,
      wrapClassName: 'vertical-center-modal',
      onOk() {
        return new Promise((resolve) => {
          that.httpService.get('/assets/data/maillist/maillist.json')
          	.subscribe(res => {
          		that.data.splice(that.data.indexOf(item), 1);
          		resolve();
          	})
	    });
      }
    })
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/maillist/maillist.json')
      .subscribe(res => this.data = res.data)
  }

}

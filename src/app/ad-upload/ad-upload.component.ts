import { Component, OnInit } from '@angular/core';
import  { simAnim, shrinkhwOut } from '../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../config';

@Component({
  selector: 'hd-ad-upload',
  templateUrl: './ad-upload.component.html',
  styleUrls: ['./ad-upload.component.css'],
  animations: [simAnim, shrinkhwOut]
})
export class AdUploadComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public data = [];

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
          		that.data.splice(that.data.indexOf(item), 1);
          		resolve();
          	})
        });
      }
    })
  }

  ngOnInit() {
    this.httpService.get('/assets/data/adupload/adupload.json')
      .subscribe(res => this.data = res.data)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css'],
  animations: [simAnim]
})
export class UpgradeComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private router: Router) { }

  public data = [];

  showModal(data) {
    var that = this;
    this.nzModalService.open({
      title: '升级确认框',
      content : '您确认要升级此等级？',
      closable: false,
      wrapClassName: 'vertical-center-modal',
      onOk() {
        return new Promise((resolve) => {
          resolve();
          that.router.navigate(['/admin/pay']);
        });
      }
    })
  }

  ngOnInit() {
    this.httpService.get('/assets/data/upgrade/upgrade.json')
      .subscribe(res => this.data = res.data)
  }

}

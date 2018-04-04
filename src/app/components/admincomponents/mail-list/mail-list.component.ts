import { Component, OnInit, OnDestroy } from '@angular/core';
import { simAnim, shrinkOut } from '../../../animations';
import { Person } from '../../../class/person';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
  animations: [simAnim, shrinkOut]
})
export class MailListComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private hdStateService: HdStateService , private nzModalService: NzModalService) { }

  public data: Person[];
  public hdState: HdStateInterface;

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
          		that.hdState.contactList.splice(that.data.indexOf(item), 1);
          		resolve();
          	})
	    });
      }
    })
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/maillist/maillist.json')
      .subscribe(res => {
        this.hdStateService.getHdStateObservable(hdState => {
          this.hdState = hdState;
          if(this.hdState.contactList) {
            this.data = this.hdState.contactList;
          }else {
            this.data = this.hdState.contactList = res.data;
          }
        })
      })
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }

}

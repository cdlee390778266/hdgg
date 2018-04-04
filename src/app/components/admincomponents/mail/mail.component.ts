import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { simAnim } from '../../../animations';
import { Person } from '../../../class/person';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  animations: [simAnim]
})
export class MailComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private hdStateService: HdStateService, private router: Router, private route: ActivatedRoute) { }

  public hdState: HdStateInterface;
  public hasAccess: boolean;
  public cid: number;
  public isError: boolean = true;
  public data: Person = {
    cid: null,
    cname: '',
    cphone: null,
    caddress: ''
  }

  save() {
  	this.httpService.get('/assets/data/mail/mail.json')
      .subscribe(res => {
        if(res.status == 200) {
            if(this.cid == -1) {
              this.data.cid = Math.ceil(Math.random()*1000);
              this.hdState.contactList.push(this.data);
            }
            this.hdStateService.setHdState(this.hdState);
          	var successModal = this.nzModalService.open({
              content : `保存成功`,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              history.back();
            }, 2000)

            this.isError = true;
        }else {
        	this.isError = false;
        }
      })
  }

  ngOnInit() {
    this.cid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.hasAccess = false;
    this.httpService.get('/assets/data/maillist/maillist.json')
      .subscribe(res => {
        this.hdStateService.getHdStateObservable(hdState => {
          this.hdState = hdState;
          if(!this.hdState.contactList) {
            this.hdState.contactList = res.data;
          }
          for(let i = 0; i < this.hdState.contactList.length; i++) {
            if(this.hdState.contactList[i].cid ==  this.cid) {
              this.hasAccess = true;
              this.data = this.hdState.contactList[i];
            }
          }
          if(this.cid ==  -1) this.hasAccess = true;
          if(!this.hasAccess) {
            var successModal = this.nzModalService.open({
              content : CONFIG.error.e14,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              history.back();
            }, 2000)
          }
        })
      })
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }

}

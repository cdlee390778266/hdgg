import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../config';

@Component({
  selector: 'hd-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  animations: [simAnim]
})
export class MailComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public data = {
      "cid": 0,
      "cname": "",
      "cphone": 0,
      "caddress": ""
    }

  public isError: boolean = true;

  save() {
  	this.httpService.get('/assets/data/mail/mail.json')
      .subscribe(res => {
        if(res.status == 200) {
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
    this.httpService.get('/assets/data/mail/mail.json')
      .subscribe(res => this.data = res.data)
  }

}

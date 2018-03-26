import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { simAnim } from '../animations';
import { User } from '../login/user';
import { NzModalService } from 'ng-zorro-antd';
import { HttpService } from '../http.service';
import { LoginService } from '../login/login.service';
import { CONFIG } from '../config';

@Component({
  selector: 'hd-updatepwd',
  templateUrl: './updatepwd.component.html',
  styleUrls: ['./updatepwd.component.css'],
  animations: [simAnim]
})
export class UpdatepwdComponent implements OnInit {

  constructor(private nzModalService: NzModalService, private loginService: LoginService, private httpService: HttpService, private router: Router) { }

  private oldPwd: string;

  private newPwd: string;

  private confirmPwd: string;

  private isUpdateSuccess: boolean = true;

  hideUpdatePwdError() {
  	this.isUpdateSuccess = true;
  }

  upPwd() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
          var user = this.loginService.getUser();
          if(user.password == this.oldPwd) {
          	this.loginService.setUserVal('password', this.newPwd);

          	var successModal = this.nzModalService.open({
              content : CONFIG.success.s3,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              	history.back();
            }, 2000)
            this.isUpdateSuccess = true;
          }else {
          	this.isUpdateSuccess = false;
          }
        }else {
          this.nzModalService.open({
            content : CONFIG.error.e2 + res.status,
            closable: false,
            footer: false,
            width: 200,
            wrapClassName: 'vertical-center-modal hd-tip'
          })
        }
      })
  }

  ngOnInit() {
  }

}

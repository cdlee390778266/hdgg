import { Component, OnInit } from '@angular/core';
import { simAnim } from '../../../animations';
import { User } from '../../../class/user';
import { LoginService } from '../../authcomponents/login/login.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [simAnim]
})
export class AuthComponent implements OnInit {

  constructor(private loginService: LoginService, private httpService: HttpService, private nzModalService: NzModalService) { }

  public user: User;

  public rname: string;

  public ID: string;

  public isAuthSuccess: boolean = true;

  auth() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
          	this.loginService.setUserVal('rname', this.rname);
          	this.loginService.setUserVal(['extend', 'ID'], this.ID);
          	var successModal = this.nzModalService.open({
              content : CONFIG.success.s4,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              	history.back();
            }, 2000)
            this.isAuthSuccess = true;
        }else {
          this.isAuthSuccess = false;
        }
      })
  }

  ngOnInit() {
  	this.user = this.loginService.getUser();
  	this.rname = this.loginService.getUserVal('rname');
  	this.ID = this.loginService.getUserVal(['extend', 'ID']);
  }

}

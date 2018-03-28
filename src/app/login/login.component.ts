import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { simAnim } from '../animations';
import { LoginService } from './login.service';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../config';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'hd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [simAnim]
})
export class LoginComponent implements OnInit {

  public isLogin: boolean = true;
  public password: string;
  public name: string;

  constructor(private loginService: LoginService, private httpService: HttpService, private nzModalService: NzModalService, private router: Router) {

  }

  login() {
    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
        if(res.status == 200) {
          var isloginSuccess = false;
          var users = this.loginService.getUsers();
          for(let i = 0, len = users.length; i < len; i++) {
            if(users[i].name == this.name && users[i].password == this.password) {
              isloginSuccess = true;
              this.loginService.setUser(users[i]);
              break;
            }
          }
          if(isloginSuccess) {
            this.isLogin = true;
            this.loginService.setLogin(true);
            var successModal = this.nzModalService.open({
              content : CONFIG.success.s2,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              this.router.navigate(['view']);
            }, 2000)
            
          }else {
            this.isLogin = false;
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

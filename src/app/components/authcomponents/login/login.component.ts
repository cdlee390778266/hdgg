import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { simAnim } from '../../../animations';
import { DefaultUsers } from '../../../ngrx/reducer';
import { HttpService } from '../../../service/http.service';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';
import * as cookies from '../../../class/cookies';

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

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private router: Router, private hdStateService: HdStateService) {}

  public isLogin: boolean = true;
  public password: string;
  public name: string;

  hideError() {
    this.isLogin = true;
  }

  login() {
    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
        if(res.status == 200) {
          var isloginSuccess = false;
          for(let i = 0, len = DefaultUsers.length; i < len; i++) {
            if(DefaultUsers[i].name == this.name && DefaultUsers[i].password == this.password) {
              isloginSuccess = true;
              cookies.set_cookie(CONFIG.cookiesName, DefaultUsers[i].uid.toString(), 2);
              this.hdStateService.resetHdState();
              this.hdStateService.setHdState(Object.assign({}, DefaultUsers[i], {isLogin: true}))
              break;
            }
          }
          if(isloginSuccess) {
            this.isLogin = true;
            var successModal = this.nzModalService.open({
              content : CONFIG.success.s2,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              this.router.navigate(['/admin/view']);
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

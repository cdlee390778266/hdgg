import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { simAnim } from '../../../animations';
import { DefaultUsers } from '../../../ngrx/reducer';
import { HttpService } from '../../../service/http.service';
import { HdStateInterface, InitialState } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { NzModalService } from 'ng-zorro-antd';
import { AuthService } from '../../../service/auth.service';
import { CONFIG } from '../../../config';
import * as reducer from '../../../ngrx/reducer';

@Component({
  selector: 'hd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [simAnim]
})
export class RegisterComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private router: Router, private hdStateService: HdStateService, private authService: AuthService) { }

  public isRegisterSuccess: boolean = true;
  public name: string;
  public email: string;
  public pwd: string;
  private defaultData: HdStateInterface = Object.assign({}, InitialState);

  register() {
    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
        if(res.status == 200) {
	        this.authService.isLoggedIn = true;
	       	this.defaultData.uid = 1;
	       	this.defaultData.level = 1;
	       	this.defaultData.isLogin = true;
	       	this.defaultData.name = this.name;
	       	this.defaultData.email = this.email;
	       	this.defaultData.password = this.pwd;

	       	this.hdStateService.setHdState(this.defaultData);
	       	DefaultUsers.push(this.defaultData);

			this.isRegisterSuccess = true;
	        var successModal = this.nzModalService.open({
	          content : CONFIG.success.s9,
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
          this.isRegisterSuccess = false;
        }
      })
  }

  ngOnInit() {
  }

}

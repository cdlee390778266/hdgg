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
import * as cookies from '../../../class/cookies';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, FormGroup, FormControl } from '@angular/forms';

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
  public cpwd: string;
  public defaultData: HdStateInterface = Object.assign({}, InitialState);
  public canSubmit: boolean = true;

  hideError() {
    this.isRegisterSuccess = true;
  }

  register() {
  	if(!this.canSubmit) return;
  	console.log(DefaultUsers)
  	this.canSubmit = false;
    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
        if(res.status == 200) {
	        this.authService.isLoggedIn = true;
	       	this.defaultData.uid = Math.floor(Math.random()*1000);
	       	this.defaultData.level = 1;
	       	this.defaultData.isLogin = true;
	       	this.defaultData.name = this.name;
	       	this.defaultData.email = this.email;
	       	this.defaultData.password = this.pwd;

	       	cookies.set_cookie(CONFIG.cookiesName, this.defaultData.uid.toString(), 2);
	       	this.hdStateService.resetHdState();
	       	this.hdStateService.setHdState(this.defaultData, true);
	       	
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
	          this.canSubmit = true;
	        }, 2000)
        }else {
          this.isRegisterSuccess = false;
          this.canSubmit = true;
        }
      })
  }

  ngOnInit() {}
}

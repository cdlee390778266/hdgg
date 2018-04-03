import { Component, OnInit } from '@angular/core';
import { User } from '../../authcomponents/login/user';
import  { simAnim } from '../../../animations';
import { LoginService } from '../../authcomponents/login/login.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css'],
  animations: [simAnim]
})
export class ReceiveComponent implements OnInit {

  constructor(private loginService: LoginService, private httpService: HttpService, private nzModalService: NzModalService) { }

  public user: User;

  public zfb: string;

  public qq: string;

  public wx: string;

  public yhk: string;

  public isCanSubmit: boolean = false;

  public isSaveSuccess: boolean = true;

  checkCanSubmit() {
  	if(this.zfb || this.qq || this.wx || this.yhk) {
  		this.isCanSubmit = true;
  	}else {
  		this.isCanSubmit = false;
  	}
  }

  save() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
          	this.loginService.setUserVal(['extend', 'zfb'], this.zfb);
          	this.loginService.setUserVal(['extend', 'qq'], this.qq);
          	this.loginService.setUserVal(['extend', 'wx'], this.wx);
          	this.loginService.setUserVal(['extend', 'yhk'], this.yhk);
          	var successModal = this.nzModalService.open({
              content : CONFIG.success.s5,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              	history.back();
            }, 2000)
            this.isSaveSuccess = true;
        }else {
          this.isSaveSuccess = false;
        }
      })
  }

  ngOnInit() {
  	this.zfb = this.loginService.getUserVal(['extend', 'zfb']);
  	this.qq = this.loginService.getUserVal(['extend', 'qq']);
  	this.wx = this.loginService.getUserVal(['extend', 'wx']);
  	this.yhk = this.loginService.getUserVal(['extend', 'yhk']);
  	this.checkCanSubmit();
  }

}
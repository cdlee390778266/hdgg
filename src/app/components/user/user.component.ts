import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../animations';
import { User } from '../login/user';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'hd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [simAnim]
})
export class UserComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public  user: User;

  public qqAccount: string;

  public wxAccount: string;

  public mmAccount: string;

  public wbAccount: string;

  public cardId: string;

  public isLogin: boolean = false;

  ngOnInit() {
  	this.user = this.loginService.getUser();
  	this.isLogin = this.loginService.getLogin();

    this.cardId = this.loginService.getUserVal(['extend', 'zfb']) || this.loginService.getUserVal(['extend', 'qq']) || this.loginService.getUserVal(['extend', 'wx']) || this.loginService.getUserVal(['extend', 'yhk']);
    this.qqAccount = this.loginService.getUserVal(['extend', 'qqAccount']);
    this.wxAccount = this.loginService.getUserVal(['extend', 'wxAccount']);
    this.mmAccount = this.loginService.getUserVal(['extend', 'mmAccount']);
    this.wbAccount = this.loginService.getUserVal(['extend', 'wbAccount']);
  }

}

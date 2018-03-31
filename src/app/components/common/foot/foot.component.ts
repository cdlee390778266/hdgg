import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'hd-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public isLogin: boolean = false;

  ngOnInit() {
  	if(this.loginService.getLogin()) {
  		this.isLogin = true
  	}
  }

}

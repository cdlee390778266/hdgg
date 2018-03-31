import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../animations';
import { User } from '../login/user';
import { LoginService } from '../login/login.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'hd-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [simAnim]
})
export class ViewComponent implements OnInit {

  constructor(private loginService: LoginService, private httpService: HttpService) { }

  public nname: string;

  public uid: number;

  public level: number;

  public record: number;

  ngOnInit() {
  	this.httpService.get('/assets/data/login/login.json')
  		.subscribe(res => {
  			this.nname = this.loginService.getUserVal('nname');
  			this.uid = this.loginService.getUserVal('uid');
  			this.level = this.loginService.getUserVal('level');
  			this.record = this.loginService.getUserVal(['extend', 'record']);
  		})
  }

}

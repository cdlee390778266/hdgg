import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../config';

@Component({
  selector: 'hd-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [simAnim]
})
export class TeamComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public level: number;

  public uid: number;

  apply() {
    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
          var successModal = this.nzModalService.open({
              content : CONFIG.success.s6,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

          setTimeout(() => {
            successModal.destroy();
          }, 2000)
      })
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/login/login.json')
  		.subscribe(res => {
  			this.level = this.loginService.getUserVal('level');
  			this.uid = this.loginService.getUserVal('uid');
  		})
  }

}

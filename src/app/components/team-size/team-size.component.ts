import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../config';

@Component({
  selector: 'hd-team-size',
  templateUrl: './team-size.component.html',
  styleUrls: ['./team-size.component.css'],
  animations: [simAnim]
})
export class TeamSizeComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public data = [];

  ngOnInit() {
    this.httpService.get('/assets/data/teamsize/teamsize.json')
      .subscribe(res => this.data = res.data)
  }

}

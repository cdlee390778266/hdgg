import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../config';

@Component({
  selector: 'hd-upgrade-d',
  templateUrl: './upgrade-d.component.html',
  styleUrls: ['./upgrade-d.component.css'],
  animations: [simAnim]
})
export class UpgradeDComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public data = [];

  ngOnInit() {
    this.httpService.get('/assets/data/upgraded/upgraded.json')
      .subscribe(res => this.data = res.data)
  }

}

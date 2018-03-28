import { Component, OnInit } from '@angular/core';
import { simAnim } from '../animations';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../config';

@Component({
  selector: 'hd-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  animations: [simAnim]
})
export class RecordComponent implements OnInit {

  constructor(private httpService: HttpService, private loginService: LoginService) { }

  public data = [];

  ngOnInit() {
    this.httpService.get('/assets/data/record/record.json')
      .subscribe(res => this.data = res.data)
  }

}

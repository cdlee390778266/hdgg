import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../config';

@Component({
  selector: 'hd-orderd',
  templateUrl: './orderd.component.html',
  styleUrls: ['./orderd.component.css'],
  animations: [simAnim]
})
export class OrderdComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public data: any;

  ngOnInit() {
  	this.httpService.get('/assets/data/orderd/orderd.json')
      .subscribe(res => this.data = res.data)
  }

}

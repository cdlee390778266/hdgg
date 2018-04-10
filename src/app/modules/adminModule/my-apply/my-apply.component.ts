import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-my-apply',
  templateUrl: './my-apply.component.html',
  styleUrls: ['./my-apply.component.css'],
  animations: [simAnim]
})
export class MyApplyComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService) { }

  public data: any;

  ngOnInit() {
  	this.httpService.get('/assets/data/myapply/myapply.json')
      .subscribe(res => this.data = res.data)
  }

}

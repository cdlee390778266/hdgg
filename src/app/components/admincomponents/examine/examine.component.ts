import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-examine',
  templateUrl: './examine.component.html',
  styleUrls: ['./examine.component.css'],
  animations: [simAnim]
})
export class ExamineComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService) { }

  public data: Array<Object>;

  ngOnInit() {
  	this.httpService.get('/assets/data/examine/examine.json')
      .subscribe(res => this.data = res.data)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  animations: [simAnim]
})
export class RecordComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  public data = [];

  ngOnInit() {
    this.httpService.get('/assets/data/record/record.json')
      .subscribe(res => this.data = res.data)
  }

}

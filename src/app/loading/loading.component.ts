import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'hd-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { 
  	LoadingService.loading = this;
  }

  show: boolean = false;
  timer;

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

  ngOnInit() {
  }

}

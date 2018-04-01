import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../../animations';

@Component({
  selector: 'hd-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
  animations: [simAnim]
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

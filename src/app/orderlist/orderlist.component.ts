import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
  animations: [simAnim]
})
export class OrderlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

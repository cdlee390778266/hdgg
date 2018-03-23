import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
@Component({
  selector: 'hd-orderd',
  templateUrl: './orderd.component.html',
  styleUrls: ['./orderd.component.css'],
  animations: [simAnim]
})
export class OrderdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

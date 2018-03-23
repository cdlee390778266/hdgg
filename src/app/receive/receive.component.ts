import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css'],
  animations: [simAnim]
})
export class ReceiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

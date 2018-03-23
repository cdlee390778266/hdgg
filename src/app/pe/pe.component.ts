import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.css'],
  animations: [simAnim]
})
export class PEComponent implements OnInit {

  constructor() { }

  handle() {
      console.log(66)
  }

  ngOnInit() {
  }

}

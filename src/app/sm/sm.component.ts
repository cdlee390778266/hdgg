import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css'],
  animations: [simAnim]
})
export class SmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

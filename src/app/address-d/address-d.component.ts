import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-address-d',
  templateUrl: './address-d.component.html',
  styleUrls: ['./address-d.component.css'],
  animations: [simAnim]
})
export class AddressDComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

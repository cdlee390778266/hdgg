import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  animations: [simAnim]
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [simAnim]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

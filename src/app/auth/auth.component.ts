import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [simAnim]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

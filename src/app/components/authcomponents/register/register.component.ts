import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../../animations';

@Component({
  selector: 'hd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [simAnim]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

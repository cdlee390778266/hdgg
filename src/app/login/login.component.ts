import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'hd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [simAnim]
})
export class LoginComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
   
  }

}

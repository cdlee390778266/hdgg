import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-updatepwd',
  templateUrl: './updatepwd.component.html',
  styleUrls: ['./updatepwd.component.css'],
  animations: [simAnim]
})
export class UpdatepwdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

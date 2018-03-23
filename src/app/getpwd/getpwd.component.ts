import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
@Component({
  selector: 'hd-getpwd',
  templateUrl: './getpwd.component.html',
  styleUrls: ['./getpwd.component.css'],
  animations: [simAnim]
})
export class GetpwdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

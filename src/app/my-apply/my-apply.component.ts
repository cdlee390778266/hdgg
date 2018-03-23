import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
@Component({
  selector: 'hd-my-apply',
  templateUrl: './my-apply.component.html',
  styleUrls: ['./my-apply.component.css'],
  animations: [simAnim]
})
export class MyApplyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

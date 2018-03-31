import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../../animations';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [simAnim]
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

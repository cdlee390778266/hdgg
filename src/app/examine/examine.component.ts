import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-examine',
  templateUrl: './examine.component.html',
  styleUrls: ['./examine.component.css'],
  animations: [simAnim]
})
export class ExamineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

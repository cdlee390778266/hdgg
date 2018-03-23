import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.css'],
  animations: [simAnim]
})
export class ApplyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

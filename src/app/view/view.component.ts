import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [simAnim]
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

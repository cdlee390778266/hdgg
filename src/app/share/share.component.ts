import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
  animations: [simAnim]
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

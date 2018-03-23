import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.css'],
  animations: [simAnim]
})
export class BbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

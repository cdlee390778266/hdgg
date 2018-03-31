import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../animations';

@Component({
  selector: 'hd-oa',
  templateUrl: './oa.component.html',
  styleUrls: ['./oa.component.css'],
  animations: [simAnim]
})
export class OaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

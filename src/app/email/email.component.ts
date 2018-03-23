import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [simAnim]
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

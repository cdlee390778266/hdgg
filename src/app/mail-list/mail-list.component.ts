import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
@Component({
  selector: 'hd-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
  animations: [simAnim]
})
export class MailListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

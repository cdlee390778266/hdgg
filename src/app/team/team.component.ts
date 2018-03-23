import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [simAnim]
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

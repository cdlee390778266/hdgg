import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
  animations: [simAnim]
})
export class AgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.css']
})
export class PEComponent implements OnInit {

  constructor() { }

  handle() {
      console.log(66)
  }

  ngOnInit() {
  }

}

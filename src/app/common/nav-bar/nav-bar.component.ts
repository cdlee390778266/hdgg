import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hd-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  @Input() viewTitle: string;
  @Input() btnType: string = 'btn';
  @Input() btnText: string;
  @Output() btnClickFn = new EventEmitter();

  private hasBtn = false;

  emitter() {
    this.btnClickFn.emit();
  }

  ngOnInit() {
      if(this.btnText || this.btnType == 'link') {
          this.hasBtn = true;
      }
  }

}

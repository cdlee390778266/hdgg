import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  @Input() btnIcon: string;
  @Input() btnLink: string;
  @Output() btnClickFn = new EventEmitter();

  public hasBtn = false;

  emitter() {
    this.btnClickFn.emit();
  }

  ngOnInit() {
      if(this.btnText || this.btnType == 'link' || this.btnIcon) {
          this.hasBtn = true;
      }

      // this.title.setTitle(this.viewTitle || '互动广告')
  }

}

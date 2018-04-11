import { Component, OnInit } from '@angular/core';
import { simAnim } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [simAnim]
})
export class UserComponent implements OnInit {

  constructor(private hdStateService: HdStateService) { }

  public hdState: HdStateInterface;

  public qqAccount: string;

  public wxAccount: string;

  public mmAccount: string;

  public wbAccount: string;

  public defaultImg: string = CONFIG.defaultImgUrl;

  ngOnInit() {
  	this.hdStateService.getHdStateObservable()
      .subscribe(hdState => {
        this.hdState = hdState;
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { HdStateService } from '../../../service/hd.state.service';

@Component({
  selector: 'hd-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor(private getHdStateService: HdStateService) { }

  public isLogin: boolean = false;

  public isShowLoginLink: boolean = false;

  ngOnInit() {
  	this.getHdStateService.getHdStateObservable()
      .subscribe(hdState => {
        if(hdState.isLogin) {
          this.isLogin = hdState.isLogin;
        }
        this.isShowLoginLink = true;
      })
  }

}

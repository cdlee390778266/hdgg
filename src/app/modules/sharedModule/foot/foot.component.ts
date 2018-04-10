import { Component, OnInit, OnDestroy } from '@angular/core';
import { HdStateService } from '../../../service/hd.state.service';

@Component({
  selector: 'hd-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit, OnDestroy {

  constructor(private getHdStateService: HdStateService) { }

  public isLogin: boolean = false;

  public isShowLoginLink: boolean = false;

  ngOnInit() {
  	this.getHdStateService.getHdStateObservable(hdState => {
        if(hdState.isLogin) {
          this.isLogin = hdState.isLogin;
        }
        this.isShowLoginLink = true;
      })
  }

  ngOnDestroy() {
    this.getHdStateService.unSubsribe();
  }

}

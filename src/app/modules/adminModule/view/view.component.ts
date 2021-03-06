import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { simAnim } from '../../../animations';
import { DefaultUsers } from '../../../ngrx/reducer';
import { HdStateService } from '../../../service/hd.state.service';
import { AuthService } from '../../../service/auth.service';
import { HttpService } from '../../../service/http.service';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { CONFIG } from '../../../config';
import * as reducer from '../../../ngrx/reducer';
import * as cookies from '../../../class/cookies';

@Component({
  selector: 'hd-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [simAnim]
})
export class ViewComponent implements OnInit, OnDestroy {

  constructor(private hdStateService: HdStateService, private httpService: HttpService, private authService: AuthService, private router: Router) { }

  public hdState: HdStateInterface;
  public name: string;
  public nname: string;
  public uid: number;
  public level: number;
  public record: number;
  public defaultImg: string = CONFIG.defaultImgUrl;

  loginOut() {
    for(let i = 0; i < DefaultUsers.length; i++) {
      if(DefaultUsers[i].uid == this.hdState.uid) {
        DefaultUsers[i] = Object.assign({}, this.hdState);
        break;
      }
    }
    cookies.delete_cookie(CONFIG.cookiesName);
    this.hdStateService.resetHdState();
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/login/login.json')
  		.subscribe(res => {
  		  this.hdStateService.getHdStateObservable(hdState =>  {
            this.hdState = hdState;
            this.name = hdState.name;
            this.nname = hdState.nname;
            this.uid = hdState.uid;
            this.level = hdState.level;
            this.record = hdState.record;
          })
  		})
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }

}

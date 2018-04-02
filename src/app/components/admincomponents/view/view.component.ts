import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { simAnim } from '../../../animations';
import { HdStateService } from '../../../service/hd.state.service';
import { AuthService } from '../../../service/auth.service';
import { HttpService } from '../../../service/http.service';
import { HdStateInterface, InitialState } from '../../../class/hd.state.interface';
import * as reducer from '../../../ngrx/reducer';

@Component({
  selector: 'hd-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [simAnim]
})
export class ViewComponent implements OnInit {

  constructor(private hdStateService: HdStateService, private httpService: HttpService, private authService: AuthService, private router: Router) { }

  public name: string;
  public nname: string;
  public uid: number;
  public level: number;
  public record: number;
  public emptyData: HdStateInterface = Object.assign({}, InitialState);

  loginOut() {
    this.hdStateService.setHdState(this.emptyData);
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/login/login.json')
  		.subscribe(res => {
  		  this.hdStateService.getHdStateObservable()
          .subscribe(hdState =>  {
            this.name = hdState.name;
            this.nname = hdState.nname;
            this.uid = hdState.uid;
            this.level = hdState.level;
            this.record = hdState.record;
          })
  		})
  }

}

import { Injectable } from '@angular/core';
import { HdStateService } from './hd.state.service';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  
  constructor(private hdStateService: HdStateService
  	) {
  	hdStateService.getHdStateObservable()
  		.subscribe(hdState => {
  			this.isLoggedIn = hdState.isLogin;
  		})
  }

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
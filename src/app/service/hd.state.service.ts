import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HdStateInterface } from '../class/hd.state.interface';
import * as actions from '../ngrx/actions';
import * as reducer from '../ngrx/reducer';
import * as cookies from '../class/cookies';
import { CONFIG } from '../config';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class HdStateService {

  constructor(private store: Store<HdStateInterface>) {
    let hdUserId = parseInt(cookies.get_cookie(CONFIG.cookiesName));
    if(hdUserId) {
      for(let i = 0; i < reducer.DefaultUsers.length; i++){
        if(reducer.DefaultUsers[i].uid == hdUserId) {
          this.hdState = reducer.DefaultUsers[i];
          this.store.dispatch({type: actions.SETSTATE, payload: this.hdState});
          break;
        }
      }
    }
  }

  subscribe: Subscription;

  hdState: HdStateInterface;

  getHdStateObservable(fn?): Observable<HdStateInterface> {
  	if(fn) {
  		this.subscribe = this.store.pipe(select('reducer')).subscribe(fn);
  	}else {
  		return this.store.pipe(select('reducer'));
  	}
  	
  }

  setHdState(newState: HdStateInterface, isAdd?: boolean) {
  	if(!newState) return;
    if(isAdd) {
      this.store.dispatch({type: actions.SETSTATE, payload: newState, isAdd: isAdd})
    }else {
    	this.store.dispatch({type: actions.SETSTATE, payload: newState})
    }
  }

  resetHdState() {
    this.store.dispatch({type: actions.RESETSTATE});
  }

  unSubsribe() {
  	if(this.subscribe) {
      this.subscribe.unsubscribe();
      console.log('subscribe is destroy')
    }
  }

}

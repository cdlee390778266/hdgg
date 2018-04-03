import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HdStateInterface } from '../class/hd.state.interface';
import * as actions from '../ngrx/actions';
import * as reducer from '../ngrx/reducer';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class HdStateService {

  constructor(private store: Store<HdStateInterface>) {
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

  setHdState(newState: HdStateInterface) {
  	if(!newState) return;
  	this.store.dispatch({type: actions.SETSTATE, payload: newState})
  }

  unSubsribe() {
  	if(this.subscribe) {
      this.subscribe.unsubscribe();
      console.log('subscribe is destroy')
    }
  }

}

import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HdStateInterface } from '../class/hd.state.interface';
import * as actions from '../ngrx/actions';
import * as reducer from '../ngrx/reducer';

@Injectable()
export class HdStateService {

  constructor(private store: Store<HdStateInterface>) {
  }

  getHdStateObservable(): Observable<HdStateInterface> {
  	return this.store.pipe(select('reducer'));
  }

  setHdState(newState: HdStateInterface) {
  	if(!newState) return;
  	this.store.dispatch({type: actions.SETSTATE, payload: newState})
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { SHOW_LOADING, HIDE_LOADING } from './reducer';

interface AppState {
  isloading: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isShowLoading: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  	this.isShowLoading = this.store.select('loading');
  	this.store.dispatch({type: HIDE_LOADING})
  }


}

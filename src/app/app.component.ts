import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as reducer from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public isShowLoading: boolean;

  constructor(private store: Store<reducer.HdStade>) {
  	this.store.pipe(select('reducer')).subscribe(hdState => {
  		this.isShowLoading = hdState.loadingState;
  	})
  }


}

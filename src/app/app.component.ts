import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as reducer from './ngrx/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public isShowLoading: boolean;

  public hdState: Observable<reducer.HdStade>;

  constructor(private store: Store<reducer.HdStade>) {
  	this.hdState = this.store.pipe(select('reducer'));
    this.hdState.subscribe(hdState => {
      console.log(this.isShowLoading)
      this.isShowLoading = hdState.sysStatus.isLoading;
  	})
  }

}

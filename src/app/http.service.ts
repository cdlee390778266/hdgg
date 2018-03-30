import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Store } from '@ngrx/store';
import { SHOW_LOADING, HIDE_LOADING } from './reducer';

interface AppState {
  isloading: boolean;
}

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  handleError(error) {
        if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    }

    get(url) {
    	if(!url) return;
        this.store.dispatch({type: SHOW_LOADING})
        return this.http.get(url)
            .pipe(tap(data => {this.store.dispatch({type: HIDE_LOADING})}), catchError(this.handleError))
    }

}

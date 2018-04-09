import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpService } from './http.service'
import { User } from '../class/user';

@Injectable()

export class ResolverService implements Resolve<User> {

  constructor(private router: Router, private http: HttpService) { }

  resolve(): Observable<User> {
	return null;
  }

}

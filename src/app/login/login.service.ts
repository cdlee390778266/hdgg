import { Injectable } from '@angular/core';
import { User } from './user';
import { DefaultUser, DefaultUsers } from './default-user';
 
@Injectable()
export class LoginService {

  public user: User = DefaultUser;
  public users = DefaultUsers;

  getUsers() {
  	return this.users;
  }

  addUsers(obj) {
  	if(!obj) return;
  	DefaultUsers.push(Object.assign({}, DefaultUser, obj))
  }

  getUser() {
  	return this.user;
  }

  setUser(obj) {
  	if(!obj) return;
  	this.user = Object.assign({}, DefaultUser, obj);
  }



  constructor() { }

}

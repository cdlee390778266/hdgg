import { Injectable } from '@angular/core';
import { User } from './user';
import { DefaultUser, DefaultUsers } from './default-user';
 
@Injectable()
export class LoginService {

  public user: User = DefaultUser;

  public users = DefaultUsers;

  public isLogin: boolean = false;

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

  getLogin() {
    return this.isLogin;
  }

  setLogin(val) {
    this.isLogin = val;
  }

  getUserVal(key) {
    if(!key) return;
    if(key instanceof Array) {
      if(key.length > 1) {
        return this.user[key[0]][key[1]];
      }else {
        return this.user[key[0]];
      }
    }else {
      return this.user[key];
    }
  }

  setUserVal(key, val) {
    if(!key) return;
    if(key instanceof Array) {
      if(key.length > 1) {
        this.user[key[0]][key[1]] = val;
      }else {
        this.user[key[0]] = val;
      }
    }else {
      this.user[key] = val;
    }
  }

  constructor() { }

}

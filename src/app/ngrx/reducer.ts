import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../class/user';
import { HdStateInterface, InitialState } from '../class/hd.state.interface';
import * as actions  from './actions';

export let DefaultUsers: User[] = [
  {
    uid: 99,
    name: 'hdAdmin',
    nname: '就回来了',
    rname: 'petter',
    password: 'hdAdmin',
    level: 10,
    cards: ['6212261598245125963248', '6212261598245125988948'],
    email: '390778266@qq.com',
    address: '四川省成都市新都区',
    phone: 0,
    record: 0
  },
  {
    uid: 100,
    name: 'lee999',
    nname: '饿哦我哦品牌',
    rname: 'lee',
    password: 'lee999',
    level: 20,
    cards: ['62567891598245125963248', '621222261598245125988948'],
    email: '390778266@qq.com',
    address: '四川省成都市新都区',
    phone: 0,
    record: 0
  }
]

export function reducer(state: HdStateInterface = InitialState, action: actions.All) {
  //console.log(state)
  switch (action.type) {
    case actions.SHOW_LOADING: {
      return Object.assign({}, state, {isLoading: true});
    }

    case actions.HIDE_LOADING: {
      return Object.assign({}, state, {isLoading: false});
    }

    case actions.SETSTATE: {
      return Object.assign({}, state, action.payload)
    }

    case actions.GETSTATE: {
      return state;
    }

    default: {
      return state;
    }
  }
}
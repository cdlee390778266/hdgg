import { ActionReducer, Action } from '@ngrx/store';

export class User {
  uid?: number;
  name?: string;
  nname?: string;
  rname?: string;
  password?: string;
  level?: number;
  cards?: Array<string>;
  email: string;
  address?: string;
  extend?: any;
}

export interface HdStade {
  loadingState: boolean,
  user: User
}

const initialState: HdStade = {
   loadingState: false,
   user: {
      uid: -1,
      name: '',
      nname: '',
      rname: '',
      password: '',
      level: 0,
      cards: [],
      email: '',
      address: '',
      extend: {},
   }
}

export const SHOW_LOADING = 'SHOW_LOADING';

export const HIDE_LOADING = 'HIDE_LOADING';

export function reducer(state: HdStade = initialState, action: Action) {
  switch (action.type) {
    case SHOW_LOADING: {
      return Object.assign({}, state, {
        loadingState: true
      })
    }

    case HIDE_LOADING: {
      return Object.assign({}, state, {
        loadingState: false
      })
    }

    default: {
      return state;
    }
  }
}
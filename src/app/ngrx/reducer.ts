import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../class/user';
import { SysStatus } from '../class/sys.status';

export interface HdStade {
  sysStatus: SysStatus,
  user: User
}

const initialState: HdStade = {
   sysStatus: {
      version: '',
      dsc: '',
      isLogin: false,
      isLoading: false
   },
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
          sysStatus: {
            isLoading: true
          }
        })
      }

      case HIDE_LOADING: {
        return Object.assign({}, state, {{
          sysStatus: {
            isLoading: false
          }
        })
      }

      default: {
        return state;
      }
  }
}
import { ActionReducer, Action } from '@ngrx/store';

const initialState = false;

export const SHOW_LOADING = 'SHOW_LOADING';

export const HIDE_LOADING = 'HIDE_LOADING';

export function reducer(state: boolean = initialState, action: Action) {
  switch (action.type) {
    case SHOW_LOADING: {
      return true;
    }

    case HIDE_LOADING: {
      return false;
    }

    default: {
      return state;
    }
  }
}
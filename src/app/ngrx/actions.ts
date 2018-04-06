import { Action } from '@ngrx/store';
import { HdStateInterface } from '../class/hd.state.interface';

export const SHOW_LOADING = 'SHOW_LOADING';

export const HIDE_LOADING = 'HIDE_LOADING';

export const GETSTATE = 'GETSTATE';

export const SETSTATE = 'SETSTATE';

export const RESETSTATE = 'RESETSTATE';

export class showLoadingAction implements Action {
  readonly type = SHOW_LOADING;
}

export class hideLoadingAction implements Action {
  readonly type = HIDE_LOADING;
}

export class setStateAction implements Action {
  readonly type = SETSTATE;

  constructor(public payload: HdStateInterface, public isAdd?: boolean) {}
}

export class getStateAction implements Action {
  readonly type = GETSTATE;
}

export class resetStateAction implements Action {
  readonly type = RESETSTATE;
}

export type All = showLoadingAction | hideLoadingAction | getStateAction | setStateAction | resetStateAction;
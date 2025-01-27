import { Action, createReducer, on } from '@ngrx/store';
import { increaseBusy, decreaseBusy, clearBusy } from './busy.actions';
import { AppState, initialState } from './app.state';

const _busyReducer = createReducer(
  initialState,
  on(increaseBusy, (state) => ({ ...state, busy: true })),
  on(decreaseBusy, (state) => ({ ...state, busy: false })),
  on(clearBusy, () => initialState)
);

export function busyReducer(state: AppState | undefined, action: Action) {
  return _busyReducer(state, action);
}

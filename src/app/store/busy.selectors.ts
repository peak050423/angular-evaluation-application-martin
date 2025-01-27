import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectBusy = (state: AppState) => state.busy;

export const isBusy = createSelector(
  selectBusy,
  (busy) => busy
);

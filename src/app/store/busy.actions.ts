import { createAction } from '@ngrx/store';

export const increaseBusy = createAction('[Busy] Increase');
export const decreaseBusy = createAction('[Busy] Decrease');
export const clearBusy = createAction('[Busy] Clear');

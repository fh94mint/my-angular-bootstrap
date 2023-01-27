import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { appReducer, AppState } from '../stores/app.reducer';

export const appFeatureKey = 'app';

export interface State {
  [appFeatureKey]: AppState;
}

export const reducers: ActionReducerMap<State> = {
  [appFeatureKey]: appReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

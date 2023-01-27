import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey, AppState } from './app.reducer';

export const selectCounterState =
  createFeatureSelector<AppState>(appFeatureKey);

export const selectAppGlobalData = createSelector(
  selectCounterState,
  (state) => state.globalData
);

export const selectAppGlobalError = createSelector(
  selectCounterState,
  (state) => state.globalError
);

import { createReducer, on } from '@ngrx/store';
import {
  loadApps,
  loadAppsSetGlobalData,
  loadAppsSetGlobalError,
} from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  globalData: unknown;
  globalError: unknown;
}

export const initialAppState: AppState = {
  globalData: undefined,
  globalError: undefined,
};

export const appReducer = createReducer(
  initialAppState,
  on(loadApps, (): AppState => initialAppState),
  on(loadAppsSetGlobalData, (state, value): AppState => {
    return {
      ...state,
      globalData: value.globalData,
    };
  }),
  on(loadAppsSetGlobalError, (state, value): AppState => {
    return {
      ...state,
      globalError: value.globalError,
    };
  })
);

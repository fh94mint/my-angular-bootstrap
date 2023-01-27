import { createAction, props } from '@ngrx/store';

export const loadApps = createAction('[App] Load Apps');

export const loadAppsSetGlobalData = createAction(
  '[App] Load Apps Set Global Data',
  props<{ globalData: unknown }>()
);

export const loadAppsSetGlobalError = createAction(
  '[App] Load Apps Set Global Error',
  props<{ globalError: unknown }>()
);

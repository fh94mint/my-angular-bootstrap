import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { AppStoreState } from './app.store.interface';

const appStoreInitialState: AppStoreState = {};

@Injectable()
export class AppStoreService extends ComponentStore<AppStoreState> {
  readonly initialize = this.updater((): AppStoreState => {
    return appStoreInitialState;
  });

  constructor() {
    super(appStoreInitialState);
  }
}

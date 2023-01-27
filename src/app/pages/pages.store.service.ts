import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { PagesStoreState } from './pages.store.interface';

const pagesStoreInitialState: PagesStoreState = {};

@Injectable()
export class PagesStoreService extends ComponentStore<PagesStoreState> {
  readonly initialize = this.updater((): PagesStoreState => {
    return pagesStoreInitialState;
  });

  constructor() {
    super(pagesStoreInitialState);
  }
}

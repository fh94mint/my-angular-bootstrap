import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { PagesStoreState } from './pages.store.interface';

const pagesStoreInitialState: PagesStoreState = {
  data: undefined,
};

@Injectable()
export class PagesStoreService extends ComponentStore<PagesStoreState> {
  readonly initialize = this.updater((): PagesStoreState => {
    return pagesStoreInitialState;
  });

  readonly update = this.updater<PagesStoreState>(
    (state, value): PagesStoreState => {
      return {
        ...state,
        ...value,
      };
    }
  );

  constructor() {
    super(pagesStoreInitialState);
  }
}

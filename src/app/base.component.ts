import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export class BaseComponent implements OnDestroy {
  #destroy$ = new Subject<void>();

  get destroy$(): Subject<void> {
    return this.#destroy$;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { TestBed } from '@angular/core/testing';

import { PagesStoreService } from './pages.store.service';

describe('PagesStoreService', () => {
  let service: PagesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

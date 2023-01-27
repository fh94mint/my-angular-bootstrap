/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesComponent } from './pages.component';
import { PagesStoreService } from './pages.store.service';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    const mockPagesStoreService = jasmine.createSpyObj(PagesStoreService, [
      'initialize',
      'update',
    ]);

    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      providers: [
        {
          provide: PagesStoreService,
          useValue: mockPagesStoreService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

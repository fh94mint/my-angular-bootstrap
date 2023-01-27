import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { PagesStoreService } from './pages.store.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [PagesStoreService],
})
export class PagesComponent extends BaseComponent {
  constructor(private readonly pagesStoreService: PagesStoreService) {
    super();
  }
}

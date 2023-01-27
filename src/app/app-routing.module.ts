import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    loadChildren: async (): Promise<typeof PagesModule> =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

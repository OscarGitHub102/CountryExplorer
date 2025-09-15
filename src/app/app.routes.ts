import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { CountryListComponent } from './country-list-component/country-list-component';
import { CountryDetailComponent } from './country-detail-component/country-detail-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'countries',
    component: CountryListComponent,
  },
  {
    path: 'country/:name',
    component: CountryDetailComponent,
  },
];
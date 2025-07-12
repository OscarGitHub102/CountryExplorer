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
        path: 'paises',
        component: CountryListComponent,
    },
    {
        path: 'pais/:name',
        component: CountryDetailComponent,
    },
];



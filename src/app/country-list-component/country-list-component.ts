import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country-service';
import { Country } from '../models/Country';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-list-component',
  imports: [RouterModule, FormsModule],
  templateUrl: './country-list-component.html',
  styleUrl: './country-list-component.scss',
})

export class CountryListComponent implements OnInit {

  flags: Country[] = [];
  continentFilter: string = '';
  languageFilter: string = '';
  continents!: string[];
  languages: string[] = [];

  constructor(private service: CountryService, private route: Router) {}

  ngOnInit(): void {
    this.service.getPaises().subscribe((data: Country[]) => {
      this.flags = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      this.continents = Array.from(this.service.getContinents(data)).sort();
      this.languages = Array.from(this.service.getLanguages(data)).sort();
    });
  }

  routeCountry(country: string) {
    this.route.navigate(['country/' + country]);
  }

  getFilteredCountries() {
    return this.flags.filter(
      (p) =>
        (!this.continentFilter || p.region === this.continentFilter) &&
        (!this.languageFilter || (p.languages && Object.values(p.languages).includes(this.languageFilter)))
    );
  }

}
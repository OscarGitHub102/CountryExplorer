import { Injectable, signal, Signal } from '@angular/core';
import { Country } from './models/Country';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CountryService {

  constructor(private http: HttpClient) {}

  countryNameList(): Observable<string[]> {
    return this.http
      .get<Country[]>('https://restcountries.com/v3.1/all?fields=name')
      .pipe(map((countries) => countries.map((c) => c.name.common)));
  }

  getRandom(): Signal<Country | null> {

    let country = signal<Country | null>(null);

    this.countryNameList().subscribe((data: string[]) => {

      const index = Math.floor(Math.random() * data.length);

      this.getPais(data[index]).subscribe((data: Country) => {
        country.set(data);
      });

    });

    return country;
  }

  getPaises(): Observable<Country[]> {

    return this.http.get<Country[]>(
      'https://restcountries.com/v3.1/all?fields=name,flags,region,languages'
    ).pipe(
        map(countries => {
          return countries.map(country => {
              if (country.languages) {
               country.idioms = this.formatLanguages(country.languages);
              }
              return country;
            });
          })
        );
  }

  getPais(name: string): Observable<Country> {

    return this.http
      .get<Country[]>('https://restcountries.com/v3.1/name/' + name)
      .pipe(
            map((res) => {
                const country = res[0];
                if (country.languages) {
                    country.idioms = Object.entries(country.languages).map(([key, value]) => ({ key, value }));
                }
                return country;
            })
        );
  }

  formatLanguages(languages: { [key: string]: string }): { key: string; value: string }[] {

    const idioms: { key: string; value: string }[] = [];

    for (const key in languages) {
      idioms.push({
        key: key,
        value: languages[key]
      });
    }

    return idioms;
  }

  getContinents(countries: Country[]): Set<string> {

    let continents: Set<string> = new Set();

    for (const country of countries) {
      continents.add(country.region);
    }

    return continents;
  }

  getLanguages(countries: Country[]): Set<string> {

    const languages: Set<string> = new Set();

    for (const country of countries) {
      if (country.languages) {
        for (const langKey in country.languages) {
          languages.add(country.languages[langKey]);
        }
      }
    }

    return languages;
  }
  
}
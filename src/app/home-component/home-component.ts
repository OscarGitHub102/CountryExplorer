import { Component, effect, Signal} from '@angular/core';
import { CountryService } from '../country-service';
import { Country } from '../models/Country';
import { CountryComponent } from '../country-component/country-component';

@Component({
  selector: 'app-home-component',
  imports: [CountryComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})

export class HomeComponent {

  countrySignal: Signal<Country | null>;
  country!: Country;

  constructor(private service: CountryService) {

    this.countrySignal = this.service.getRandom();

    effect(() => {

      let c = this.countrySignal();
      if (c) {
        this.country = c;
      }
    });

  }

}
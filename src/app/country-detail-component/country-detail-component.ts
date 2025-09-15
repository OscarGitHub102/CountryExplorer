import { Component, computed, effect, inject } from '@angular/core';
import { CountryComponent } from '../country-component/country-component';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/Country';
import { CountryService } from '../country-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-country-detail-component',
  imports: [CountryComponent],
  templateUrl: './country-detail-component.html',
  styleUrl: './country-detail-component.scss',
})

export class CountryDetailComponent {

  country!: Country;

  private route = inject(ActivatedRoute);

  paramsSignal = toSignal(this.route.params);
  nameComputed = computed(() => this.paramsSignal()?.['name']);

  constructor(private service: CountryService) {
    effect(() => {
      let name = this.nameComputed();
      this.service.getPais(name as string).subscribe((data: Country) => {
        this.country = data;
      });
    });
  }
}
import { Component, computed, effect, inject} from '@angular/core';
import { CountryComponent } from "../country-component/country-component";
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/Country';
import { CountrysService } from '../countrys-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-country-detail-component',
  imports: [CountryComponent],
  templateUrl: './country-detail-component.html',
  styleUrl: './country-detail-component.scss'
})
export class CountryDetailComponent{

  pais !: Country;
  private route = inject(ActivatedRoute);
  paramsSignal = toSignal(this.route.params);
  nameComputed = computed(() => this.paramsSignal()?.['name']);

  constructor(private servicio: CountrysService){
    effect(() => {
      let name = this.nameComputed();
      this.pais = this.servicio.getPais(name as string);
    });
  }

}



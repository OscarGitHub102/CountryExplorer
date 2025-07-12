import { Component, Input } from '@angular/core';
import { Country } from '../models/Country';

@Component({
  selector: 'app-country-component',
  imports: [],
  templateUrl: './country-component.html',
  styleUrl: './country-component.scss'
})
export class CountryComponent {

  @Input() pais!: Country;

}
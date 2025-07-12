import { Component, OnInit } from '@angular/core';
import { CountrysService } from '../countrys-service';
import { Country } from '../models/Country';
import { CountryComponent } from "../country-component/country-component";

@Component({
  selector: 'app-home-component',
  imports: [CountryComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent implements OnInit {

  pais !: Country;

  constructor(private servicio: CountrysService){}

  ngOnInit(): void{
    this.servicio.cargarPaises();
    this.pais = this.servicio.obtenerAleatorio();
  }

}
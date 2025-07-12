import { Component, OnInit } from '@angular/core';
import { CountrysService } from '../countrys-service';
import { Country } from '../models/Country';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-list-component',
  imports: [FormsModule, RouterModule],
  templateUrl: './country-list-component.html',
  styleUrl: './country-list-component.scss'
})

export class CountryListComponent implements OnInit{

  countries: Country [] = [];
  filtroContinente : string = "";
  filtroIdioma : string = "";

  constructor(private servicio: CountrysService, private route: Router){}

  ngOnInit(): void {
    this.servicio.cargarPaises();
    this.countries = this.servicio.getPaises();
  }

  enlazarPais(pais: string){
    this.route.navigate(['pais/' + pais]);
  }

  obtenerPaisesFiltrados(){
    return this.countries.filter(
      (p) => 
        (!this.filtroContinente || p.region == this.filtroContinente) &&
        (!this.filtroIdioma ||
          p.languages.some((l) => l.name == this.filtroIdioma))
    );
  }

}
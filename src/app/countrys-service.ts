import { Injectable } from '@angular/core';
import { COUNTRIES, Country } from './models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountrysService {

  private paises !: Country[];

  constructor() { }

  cargarPaises(){
    this.paises = COUNTRIES;
  }

  listaNombrePaises(){
    return this.paises.map(p => p.name);
  }

  obtenerAleatorio(){
    const pos = Math.floor(Math.random() * this.paises.length);
    return this.paises[pos];
  }

  getPaises(): Country []{
    return this.paises;
  }

  getPais(name: string): Country{
    return this.paises.find((p) => p.name == name) || this.paises[0];
  }

}
import { Component, OnInit } from '@angular/core';
import { CountrysService } from '../countrys-service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent implements OnInit {

  private nombres !: string[];
  sugerencias : string[] = [];
  busqueda: string = '';

  constructor(private servicio: CountrysService, private route: Router){}

  ngOnInit(): void {
      this.servicio.cargarPaises();
      this.nombres = this.servicio.listaNombrePaises();
  }

  autocompletar(){

    if(this.busqueda.length >= 3){
      this.sugerencias = this.nombres.filter(nom =>
        nom.toLowerCase().includes(this.busqueda.toLowerCase()));
    }else{
      this.sugerencias = [];
    }

  }

  seleccionar(texto: string){
    this.busqueda = texto;
    this.sugerencias = [];
    this.route.navigate(['pais/' + texto]);
  }

  buscar(){

    let encontrado = this.nombres.find((nom) =>
        nom.toLowerCase().includes(this.busqueda.toLowerCase()));
  
    if( encontrado == null ){
      alert('País no encontrado');
    }else{
      this.route.navigate(['pais/' + encontrado]);
    }       
        
  }
  
}
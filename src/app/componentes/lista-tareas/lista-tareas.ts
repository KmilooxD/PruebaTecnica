import {Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';

export interface PeriodicElement {
  titulo: string;
  position: number;
  descripcion: string;
  estado: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, titulo: 'caminar', descripcion:'salir a caminar', estado: false},
  {position: 2, titulo: 'correr', descripcion: 'salir a correr', estado: false},
  {position: 3, titulo: 'ordenar', descripcion: 'ordenar casa', estado: false},
  {position: 4, titulo: 'dormir', descripcion: 'dormirr', estado: false},
];

@Component({
  selector: 'app-lista-tareas',
  imports: [MatCardModule,MatTableModule,MatCheckboxModule],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})

export class ListaTareas {
displayedColumns: string[] = ['position', 'titulo', 'descripcion', 'estado'];
  dataSource = ELEMENT_DATA;
constructor(private route:Router){

}
  
  irPagina(direccion:string){
    console.log(direccion);
   this.route.navigate([direccion]);
  }
}

import {Component, effect, EventEmitter, input, Output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TareasInterface } from '../../interface/tareas-interface';
import { TareasServicio } from '../../servicios/tareas-servicio';


@Component({
  selector: 'app-lista-tareas',
  imports: [MatCardModule,MatTableModule,MatCheckboxModule],
  templateUrl: './lista-tareas-componentes.html',
  styleUrl: './lista-tareas-componentes.css',
})

export class ListaTareas {
@Output() idTarea:EventEmitter<number>= new EventEmitter<number>();
tareas=input<TareasInterface[]>([]);

  constructor(private bd:TareasServicio){
  effect(()=>{
    if(this.tareas()){
      this.dataSource=this.tareas();
    }
  })
  }

  cambioEstado(id:number){
    this.idTarea.emit(id);
    this.dataSource=this.bd.obtenerTareasPendientes();
}
  displayedColumns: string[] = ['position', 'titulo', 'descripcion', 'estado','accion'];
  dataSource:TareasInterface[] = [];
}

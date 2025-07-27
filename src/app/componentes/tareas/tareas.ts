import { Component, signal } from '@angular/core';
import { ListaTareas } from '../lista-tareas/lista-tareas-componentes';
import { RouterModule } from '@angular/router';
import { TareasServicio } from '../../servicios/tareas-servicio';
import { TareasInterface } from '../../interface/tareas-interface';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tareas',
  imports: [ListaTareas,RouterModule,MatButtonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
constructor(private bd:TareasServicio){}
data=signal<TareasInterface[]>([]);
ngOnInit(){
  this.obtenerTareas();
  
}
obtenerTareas(){
this.data.set(this.bd.obtenerTareasPendientes());

}
recibirIdTarea(id:number){
  this.bd.completarTarea(id);
}
}

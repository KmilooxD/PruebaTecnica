import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareasInterface } from '../interface/tareas-interface';
import bd from '../../db/db.json';


@Injectable({
  providedIn: 'root',
})
export class TareasServicio {
// url='http://localhost:3000'

constructor(private http:HttpClient){}

obtenerTareas(){
  let pendientes=[];
  pendientes=bd.tareas.filter(x=>x.estado===false)
  return pendientes as unknown as TareasInterface[];
  }

ingresarTareas(data:TareasInterface){
bd.tareas.push(data);
}
completarTarea(id:number){
  let estado=bd.tareas.find(x=>x.id===id);
  if(estado){
    estado.estado=true;
  }
}
}

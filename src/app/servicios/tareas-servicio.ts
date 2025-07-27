import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareasInterface } from '../interface/tareas-interface';
import bd from '../../db/db.json';
import { AgregarTareaInterface } from '../interface/agregar-tarea-interface';


@Injectable({
  providedIn: 'root',
})
export class TareasServicio {
// url='http://localhost:3000'

constructor(private http:HttpClient){}

obtenerTareas(): TareasInterface[] {
  return bd.tareas; 
}

obtenerTareasPendientes():TareasInterface[]{
  let pendientes=[];
  pendientes=bd.tareas.filter(x=>x.estado===false)
  return pendientes as TareasInterface[];
  }

ingresarTareas(data:AgregarTareaInterface){
bd.tareas.push(data);
}
completarTarea(id:number){
  let estado=bd.tareas.find(x=>x.id===id);  
  if(estado){
    estado.estado=true;
  }
}
}

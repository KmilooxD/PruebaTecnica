import { Routes } from '@angular/router';
import { AgregarTareas } from './componentes/agregar-tareas/agregar-tareas-componentes'; 
import { ListaTareas } from './componentes/lista-tareas/lista-tareas-componentes';
import { Tareas } from './componentes/tareas/tareas';

export const routes: Routes = [
    {path: '', component:Tareas},
    {path: 'agregarTarea', component: AgregarTareas},
    {path: 'listaTarea', component: ListaTareas},
];

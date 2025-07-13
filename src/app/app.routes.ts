import { Routes } from '@angular/router';
import { AgregarTareas } from './componentes/agregar-tareas/agregar-tareas';
import { ListaTareas } from './componentes/lista-tareas/lista-tareas';
import { linkedSignal } from '@angular/core';

export const routes: Routes = [
    {path: 'agregarTarea', component: AgregarTareas},
    {path: 'listaTarea', component: ListaTareas},
    {path: '', component:ListaTareas}
];

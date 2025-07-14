import { Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareasServicio } from '../../servicios/tareas-servicio';
import { AgregarTareaInterface } from '../../interface/agregar-tarea-interface';
import { Router } from '@angular/router';
import { T } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-agregar-tareas',
  imports: [MatFormFieldModule,MatInputModule, 
    MatCardModule,MatButtonModule, ReactiveFormsModule
  ],
  templateUrl: './agregar-tareas-componentes.html',
  styleUrl: './agregar-tareas-componentes.css'
})
export class AgregarTareas {
  constructor(private bd:TareasServicio,private route:Router){}

  fb=inject(FormBuilder);
  form=this.fb.group({
    id:[0,[Validators.required,Validators.min(1)]],
    titulo:['',[Validators.required,Validators.minLength(2)]],
    descripcion:['',[Validators.required,Validators.minLength(2)]],
    estado:[false]
  })
  
  enviarForm(direccion:string){
      const data: AgregarTareaInterface = {
      id: this.form.value.id!,
      titulo: this.form.value.titulo!,
      descripcion: this.form.value.descripcion!,
      estado: this.form.value.estado!
    }
    const id=data.id;
    const idActuales = this.bd.obtenerTareas();
    const idDuplicado = idActuales.some(x => x.id  === id);
    if (idDuplicado) {
      alert('El ID ya existe. Por favor ingresa uno diferente.');
      return;
    }

  this.bd.ingresarTareas(data);
   this.route.navigate([direccion]);
   alert('La nueva tarea fue creada');
  }
  
  
}



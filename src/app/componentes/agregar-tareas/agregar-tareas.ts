import { Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-tareas',
  imports: [MatFormFieldModule,MatInputModule, 
    MatCardModule,MatButtonModule, ReactiveFormsModule
  ],
  templateUrl: './agregar-tareas.html',
  styleUrl: './agregar-tareas.css'
})
export class AgregarTareas {
  fb=inject(FormBuilder);

  form=this.fb.group({
    titulo:['',[Validators.required,Validators.minLength(2)]],
    descripcion:['',[Validators.required,Validators.minLength(2)]],
    estado:[false]
  })

  enviarForm(){
    console.log(this.form);

  }
}


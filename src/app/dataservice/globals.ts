import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante';

@Injectable()
export class Globals {
  estudiante: Estudiante;
  id_competencia: string;
  nombre_curso: string;
  estudianteEnSesion : Estudiante = {
    id_usuario: 3,
    nombre: "Jefferson",
    apellido: "Muñoz Vargas",
    correo: "jeffmunv@gmail.com",
    contrasena: "123",
    url_foto: "foto3"
  }
}
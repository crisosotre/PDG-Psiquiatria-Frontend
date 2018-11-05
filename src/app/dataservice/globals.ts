import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante';

@Injectable()
export class Globals {
  estudiante: Estudiante;
  id_competencia: string;
  nombre_curso: string;
}
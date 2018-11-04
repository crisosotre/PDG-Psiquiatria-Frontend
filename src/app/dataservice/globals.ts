import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante';

@Injectable()
export class Globals {
  estudiante: Estudiante;
  id_competencia: number;
  nombre_curso: string;
}
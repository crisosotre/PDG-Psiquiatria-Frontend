import { Injectable, Output, EventEmitter } from '@angular/core';
import { Estudiante } from  '../dataService/estudiante';

@Injectable()
export class EvaluacionService {

  @Output() estSeleccionado  = new EventEmitter<Estudiante>();
  @Output() compSeleccionada = new EventEmitter<number>();

  constructor() { }

  setEstSeleccionado(estudiante: Estudiante) {
    console.log(estudiante.nombre)
    this.estSeleccionado.emit(estudiante);
    console.log(this.estSeleccionado)
  }

  setCompSeleccionada(valor: number) {
    console.log(valor)
    this.compSeleccionada.emit(valor);
    console.log(this.compSeleccionada)
  }

  getEstSeleccionado(){
    return this.estSeleccionado;
  }

  getCompSeleccionada(){
    return this.compSeleccionada;
  }
}

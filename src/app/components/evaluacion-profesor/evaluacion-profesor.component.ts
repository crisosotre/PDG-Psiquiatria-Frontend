import { Component, OnInit } from '@angular/core';
import { dataService } from './../../dataservice/data.service';
import { Profesor } from './../../dataservice/profesor';
import { Estudiante } from './../../dataservice/estudiante';

@Component({
  selector: 'app-evaluacion-profesor',
  templateUrl: './evaluacion-profesor.component.html',
  styleUrls: ['./evaluacion-profesor.component.css']
})
export class EvaluacionProfesorComponent implements OnInit {

  profesores : Profesor[];

  estudiantes : Estudiante[];

  getProfesores() : void {
    this.dataService.getProfesores().then(profesores => this.profesores = profesores);
  }

  getEstudiantes() : void {
    this.dataService.getEstudiantes().then(estudiantes => this.estudiantes = estudiantes);
  }

  constructor(private dataService: dataService, private profesor: Profesor, private estudiante: Estudiante) { }

  ngOnInit() {
    this.getProfesores();
    this.getEstudiantes();
    console.log(this.estudiantes);
    console.log(this.profesores);
    
  }

}

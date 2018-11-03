import { Component, OnInit } from '@angular/core';
import { dataService } from './../../dataservice/data.service';
import { Estudiante } from './../../dataservice/estudiante';

@Component({
  selector: 'app-evaluacion-profesor',
  templateUrl: './evaluacion-profesor.component.html',
  styleUrls: ['./evaluacion-profesor.component.css']
})
export class EvaluacionProfesorComponent implements OnInit {

  estudiantes : Estudiante[];

  getEstudiantes() : void {
    this.dataService.getEstudiantes().then(estudiantes => this.estudiantes = estudiantes);
  }

  constructor(private dataService: dataService,private estudiante: Estudiante) { }

  ngOnInit() {
    this.getEstudiantes();
    console.log(this.estudiantes);
  }

}

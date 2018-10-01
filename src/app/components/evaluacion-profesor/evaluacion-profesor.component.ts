import { Component, OnInit } from '@angular/core';
import { dataService } from './../../dataservice/data.service';
import { Profesor } from './../../dataservice/profesor';

@Component({
  selector: 'app-evaluacion-profesor',
  templateUrl: './evaluacion-profesor.component.html',
  styleUrls: ['./evaluacion-profesor.component.css']
})
export class EvaluacionProfesorComponent implements OnInit {

  profesores : Profesor[];

  getProfesores() : void {
    this.dataService.getProfesores().then(profesores => this.profesores = profesores);
  }

  constructor(private dataService: dataService, private profesor: Profesor) { }

  ngOnInit() {
    this.getProfesores();
    console.log(this.profesores);
  }

}

import { Component, OnInit } from '@angular/core';
import { dataService } from './../../dataservice/data.service';
import { Estudiante } from './../../dataservice/estudiante';
import { Competencia } from './../../dataservice/competencia';
import { Globals } from './../../dataservice/globals';


@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  estudiante : Estudiante;
  competencia : Competencia;
  id_competencia : number;

  constructor(private dataService: dataService, private globals: Globals ) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    
    console.log(this.estudiante);
    this.estudiante = this.globals.estudiante;
    console.log(this.estudiante.nombre)
   this.id_competencia = this.globals.id_competencia;
    console.log(this.id_competencia);
    this.dataService.getCompetenciaPorId(this.id_competencia).then(competencia => this.competencia = competencia);
  }

}

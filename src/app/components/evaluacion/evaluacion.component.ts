import { Component, OnInit } from '@angular/core';
import { dataService } from './../../dataservice/data.service';
import { Estudiante } from './../../dataservice/estudiante';
import { Competencia } from './../../dataservice/competencia';
import { Globals } from './../../dataservice/globals';
import { Objetivo } from '../../dataservice/objetivo';
import { Assessment } from '../../dataservice/assessment';
import { Evaluacion } from '../../dataservice/evaluacion';
import { MomentoEvaluativo } from '../../dataservice/momento-evaluativo';
import { ObjetivoAssessment } from '../../dataservice/objetivo-assessment';
import { VariablesConfiguracion } from '../../dataservice/variables-configuracion';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  public error = null;

  estudiante : Estudiante;
  competencia : Competencia;
  id_competencia : string;
  objetivosCompetencia : Objetivo[];
  metodosAssessment: Assessment[];
  assessmentEstudiante: Assessment[];
  evaluacion : Evaluacion;
  momentoEvaluativo: MomentoEvaluativo;
  objetivoAssessment: ObjetivoAssessment;
  varConf : VariablesConfiguracion;
  assessmentSeleccionado : string;

  constructor(
    private dataService: dataService, 
    private globals: Globals
    ) { }

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
    this.getObjetivosPorCompetencias();
    this.getAssessments();
  }

  getObjetivosPorCompetencias() : void {
    this.dataService.getObjetivosPorCompetencia(this.id_competencia).then(objetivosPorCompetencia => this.objetivosCompetencia = objetivosPorCompetencia);
  }

  getAssessments(): void {
    this.dataService.getAssessments().then(assessments => this.metodosAssessment= assessments);
  }

  crearEvaluacion(objetivo: Objetivo, calificacion: number, assessment: string){
    if(this.assessmentSeleccionado !== 'Seleccione' || this.assessmentSeleccionado.length != 0){
      console.log(objetivo.desc_objetivo);
      console.log(calificacion);
      console.log(assessment);

    }else{
      this.error = 'Por favor seleccione un método de assessment'
    }
  }

}

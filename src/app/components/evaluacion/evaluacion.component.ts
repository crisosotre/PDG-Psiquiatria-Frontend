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
import { Curso } from 'src/app/dataservice/curso';
import { Profesor } from 'src/app/dataservice/profesor';
import { UsuarioPerfil } from 'src/app/dataservice/usuario-perfil';
import { UsuarioCurso } from 'src/app/dataservice/usuario-curso';

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
  assessmentSeleccionado : string;
  profesor : Profesor;
  usuarioPerfil : UsuarioPerfil[];
  usuarioCurso : UsuarioCurso[];

  constructor(
    private dataService: dataService, 
    private globals: Globals
    ) { }
  
  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() : void{
    this.estudiante = this.globals.estudiante;
    this.id_competencia = this.globals.id_competencia;
    this.dataService.getCompetenciaPorId(this.id_competencia).then(competencia => this.competencia = competencia);
    this.getObjetivosPorCompetencias();
    this.getAssessments();
    this.getProfesor();
    this.getUsuarioCurso();
    this.getUsuarioPerfil();
  }

  getObjetivosPorCompetencias() : void {
    this.dataService.getObjetivosPorCompetencia(this.id_competencia).then(objetivosPorCompetencia => this.objetivosCompetencia = objetivosPorCompetencia);
  }

  getAssessments(): void {
    this.dataService.getAssessments().then(assessments => this.metodosAssessment= assessments);
  }

  getProfesor() : void {
    this.dataService.getProfesor().then(prof => this.profesor = prof);
  }

  getUsuarioPerfil() : void {
    this.dataService.getUsuarioPerfil().then(usp => this.usuarioPerfil = usp);
  }

  getUsuarioCurso() : void {
    this.dataService.getUsuarioCurso().then(usc => this.usuarioCurso = usc);
  }

  evaluar(objetivo: Objetivo, calificacion: number) :  void {
      
      console.log(objetivo.desc_objetivo);
      console.log(calificacion);
      console.log(this.assessmentSeleccionado);
      
      var assessment: Assessment;

      for(let item of this.metodosAssessment){
        if( item.aberviatura === this.assessmentSeleccionado){
            assessment = item;
        }
      }
      console.log(assessment)
      this.crearObjetivoAssessment(objetivo.id_objetivo, assessment.id_assessment, calificacion);
      
  }

  crearObjetivoAssessment(id_objetivo: number, id_assessment:number, calificacion: number) : void {

    console.log('paso');
    console.log(id_objetivo);
    console.log(id_assessment);

    var objass: ObjetivoAssessment[]; 
    this.dataService.getObjetivoAssessment().then(objass => objass = objass);
    var objs: ObjetivoAssessment;
    var id_obj_ass : number;
  
    if(objass === null || objass.length === 0 ){
      id_obj_ass = 1;
    }else{
      objs = objass.pop();
      id_obj_ass = objs.id_obj_assess +1;
    }

    let objetivoAssessment : ObjetivoAssessment = {
      id_obj_assess: id_obj_ass,
      id_objetivo: id_objetivo,
      id_assessment: id_assessment
    };
    
    this.dataService.crearObjetivoAssessment(objetivoAssessment);
    console.log('paso');
    this.crearMomentoEvaluativo(id_obj_ass, calificacion);

  }

  crearMomentoEvaluativo(id_obj_assess: number, calificacion:number) : void {
    console.log('paso');
    var ponderacion: VariablesConfiguracion;
    this.dataService.getPonderacion().then(pond => ponderacion=pond);

    var mes: MomentoEvaluativo[];
    this.dataService.getMomentoEvaluativo().then(me => mes = me);

    var curso: Curso;
    this.dataService.getCursoById(1).then(cur=> curso = cur);

    var id_momento_evaluativo: number;

    if(mes == null || mes.length== 0){
      id_momento_evaluativo = 1;
    }else{
      id_momento_evaluativo = mes.pop().id_momento_evaluativo+1;
    }

    let momentoEvaluativo : MomentoEvaluativo = {
      id_momento_evaluativo: id_momento_evaluativo,
      ponderacion: ponderacion.valor,
      id_curso: curso.id_curso,
      id_obj_assess: id_obj_assess
    };

    this.dataService.crearMomentoEvaluativo(momentoEvaluativo);
    console.log('paso');
    this.crearEvaluacion(calificacion,id_momento_evaluativo);

  }

  crearEvaluacion(calificacion : number, id_momento_evaluativo: number) : void {
    console.log('paso');
    var id_evaluacion : number;
    var id_usuario_curso : number;
    var id_usuario_perfil : number;

    var evals : Evaluacion[];
    this.dataService.getEvaluacion().then(ev => evals = ev);

    var curso: Curso;
    this.dataService.getCursoById(1).then(cur=> curso = cur);

    if(evals == null || evals.length == 0){
      id_evaluacion = 0;
    }else{
      id_evaluacion = evals.pop().id_evaluacion+1;
    }

    for (let item of this.usuarioCurso){
      if(item.id_usuario == this.estudiante.id_usuario && item.id_curso == curso.id_curso){
        id_usuario_curso = item.id_usuario_curso;
      }
    }

    for (let item of this.usuarioPerfil){
      if(item.id_usuario == this.profesor.id_usuario){
        id_usuario_perfil == item.id_usuario_perfil;
      }
    }

    let evaluacion : Evaluacion = {
      id_evaluacion : id_evaluacion,
      calificacion : calificacion,
      id_momento_evaluativo : id_momento_evaluativo,
      id_usuario_curso : id_usuario_curso,
      id_usuario_perfil : id_usuario_perfil
    }

    this.dataService.crearEvaluacion(evaluacion);
    console.log('paso');
  }



 

}

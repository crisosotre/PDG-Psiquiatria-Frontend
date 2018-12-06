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
  selector: 'app-autoevaluacion',
  templateUrl: './autoevaluacion.component.html',
  styleUrls: ['./autoevaluacion.component.css']
})
export class AutoevaluacionComponent implements OnInit {

  public error = null;
  public mensaje = null;

  estudiante : Estudiante;
  competencia : Competencia;
  id_competencia : string;
  objetivosCompetencia : Objetivo[];
  metodosAssessment: Assessment[];
  assessmentEstudiante: Assessment[];
  assessmentSeleccionado : string = "Seleccione";
  profesor : Profesor;
  usuarioPerfil : UsuarioPerfil[];
  usuarioCurso : UsuarioCurso[];
  objass: ObjetivoAssessment[];
  ponderacion: VariablesConfiguracion;
  mes: MomentoEvaluativo[];
  curso: Curso;
  evals : Evaluacion[];

 

  constructor( private dataService: dataService, 
    private globals: Globals) { }

    ngOnInit() {
      this.cargarDatos();
    }
  
    cargarDatos() : void{
      this.estudiante = this.globals.estudianteEnSesion;
      this.id_competencia = this.globals.id_competencia;
      this.dataService.getCompetenciaPorId(this.id_competencia).then(competencia => this.competencia = competencia);
      this.getObjetivosPorCompetencias();
      this.getAssessments();
      this.getProfesor();
      this.getUsuarioCurso();
      this.getUsuarioPerfil();
      this.getObjetivoAssessment();
      this.getPonderacion();
      this.getMomentoEvaluativo();
      this.getCurso();
      this.getEvaluacion();
    }
  
    getObjetivosPorCompetencias() : void {
      this.dataService.getObjetivosPorCompetencia(this.id_competencia).then(objetivosPorCompetencia => this.objetivosCompetencia = objetivosPorCompetencia);
    }
  
    getAssessments(): void {
      this.dataService.getAssessments().then(assessments => this.metodosAssessment = assessments);
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

    getObjetivoAssessment() : void {
      this.dataService.getObjetivoAssessment().then(obj => this.objass = obj);
    }
  
    getPonderacion() : void {
      this.dataService.getPonderacion().then(pond => this.ponderacion=pond);
    }
  
    getMomentoEvaluativo() : void {
      this.dataService.getMomentoEvaluativo().then(me => this.mes = me);
    }
  
    getCurso() : void {
      this.dataService.getCursoById(1).then(cur=> this.curso = cur);
    }
  
    getEvaluacion() : void {
      this.dataService.getEvaluacion().then(ev => this.evals = ev);
    }

    selectChangeHandler(event: any){
      this.assessmentSeleccionado = event.target.value;
    }

    evaluar(objetivo: Objetivo, calificacion: number) :  void {

      this.error = null;
      this.mensaje = null;
      
      console.log(objetivo.desc_objetivo);
      console.log(calificacion);
      console.log(this.assessmentSeleccionado);
      
      if(this.assessmentSeleccionado === undefined || this.assessmentSeleccionado ==="Seleccione" || this.assessmentSeleccionado === ""){

        this.error = "Por favor seleccione un método de assessment";

      }else{

        var assessment: Assessment;
        for(var item of this.metodosAssessment){
          if( item.abreviatura === this.assessmentSeleccionado){
              assessment = item;
              console.log(assessment.abreviatura);
          }
        }
        console.log(assessment.abreviatura);
        this.crearObjetivoAssessment(objetivo.id_objetivo, assessment.id_assessment, calificacion);
      }
      
  }

  crearObjetivoAssessment(id_objetivo: number, id_assessment:number, calificacion: number) : void {

    this.error = null;
    this.mensaje = null;

    console.log('Entró al objetivo por assessment');
    console.log(id_objetivo);
    console.log(id_assessment);
    
    var objs: ObjetivoAssessment;
    var id_obj_ass : number;
    
    if(this.objass.length === 0){
      console.log("entró en el if");
      id_obj_ass = 1; 
    }else{
      console.log("ya existe algo");
      objs = this.objass.pop();
      id_obj_ass = objs.id_obj_assess +1;
      console.log(id_obj_ass);
    }

    let objetivoAssessment : ObjetivoAssessment = {
      id_obj_assess: id_obj_ass,
      id_objetivo: id_objetivo,
      id_assessment: id_assessment
    };
    
    this.dataService.crearObjetivoAssessment(objetivoAssessment).subscribe(
    x=> console.log("Se creó el objetivo por assessment correctamente"),
    e=> this.error = "Se produjo un error inesperado",
    ()=> this.crearMomentoEvaluativo(id_obj_ass, calificacion));
    console.log('Pasó el objetivo por assessment');

  }

  crearMomentoEvaluativo(id_obj_assess: number, calificacion:number) : void {
    console.log('Entró al momento evaluativo');

    var id_momento_evaluativo: number;
    console.log(this.mes.length);
    if(this.mes.length===0){
      id_momento_evaluativo = 1;
    }else{
      id_momento_evaluativo = this.mes.pop().id_momento_evaluativo+1;
    }

    let momentoEvaluativo : MomentoEvaluativo = {
      id_momento_evaluativo: id_momento_evaluativo,
      ponderacion: this.ponderacion.valor,
      id_curso: this.curso.id_curso,
      id_obj_assess: id_obj_assess
    };

    this.dataService.crearMomentoEvaluativo(momentoEvaluativo).subscribe( 
    x=> console.log("Se creó el momento evaluativo correctamente"),
    e=> this.error = "Se produjo un error inesperado",
    ()=>this.crearEvaluacion(calificacion,id_momento_evaluativo));
    console.log('Pasó el momento evaluativo');
    

  }

  crearEvaluacion(calificacion : number, id_momento_evaluativo: number) : void {
    console.log('Entró a la evaluación');
    var id_evaluacion : number;
    var id_usuario_curso : number;
    var id_usuario_perfil : number;

    if(this.evals.length === 0){
      id_evaluacion = 1;
    }else{
      id_evaluacion = this.evals.pop().id_evaluacion+1;
    }

    for (let item of this.usuarioCurso){
      if(item.id_usuario === this.estudiante.id_usuario && item.id_curso === this.curso.id_curso){
        id_usuario_curso = item.id_usuario_curso;
      }
    }

    for (let item of this.usuarioPerfil){
      if(item.id_usuario === this.estudiante.id_usuario){
        id_usuario_perfil = item.id_usuario_perfil;
      }
    }

    let evaluacion : Evaluacion = {
      id_evaluacion : id_evaluacion,
      calificacion : calificacion,
      id_momento_evaluativo : id_momento_evaluativo,
      id_usuario_curso : id_usuario_curso,
      id_usuario_perfil : id_usuario_perfil
    }

    this.dataService.crearEvaluacion(evaluacion).subscribe(
    x=> this.mensaje = "Se realizó la autoevaluación con éxito",
    e=> this.error ="Se produjo un error inesperado",
    ()=> this.cargarDatos());
    console.log('Pasó la evaluación');
    this.assessmentSeleccionado = "Seleccione";
  }
  
}

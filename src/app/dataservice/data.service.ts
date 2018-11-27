import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from './profesor'
import { Estudiante } from './estudiante';
import { Competencia } from './competencia';
import { Assessment } from './assessment';
import { CompetenciaCurso } from './competencia-curso';
import { CompetenciaObjetivo } from './competencia-objetivo';
import { Curso } from './curso';
import { Evaluacion } from './evaluacion';
import { MomentoEvaluativo } from './momento-evaluativo';
import { ObjetivoAssessment } from './objetivo-assessment';
import { Objetivo } from './objetivo';
import { Perfil } from './perfil';
import { TipoAssessment } from './tipo-assessment';
import { TipoObjetivo } from './tipo-objetivo';
import { VariablesConfiguracion } from './variables-configuracion';
import { UsuarioPerfil } from './usuario-perfil';
import { UsuarioCurso } from './usuario-curso';

@Injectable()
export class dataService {

    constructor(private http: Http , private http2: HttpClient){}

        private headers = new Headers({'Content-Type': 'application/json'});

            //Métodos GET

            getProfesor(): Promise<Profesor>{
                return this.http.get('http://localhost:8000/profesor/1?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Profesor)
            }

            getEstudiantes(): Promise<Estudiante[]>{
                return this.http.get('http://localhost:8000/estudiante?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Estudiante[])
            }

            getCompetencias(): Promise<Competencia[]>{
                return this.http.get('http://localhost:8000/competencia?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Competencia[])
            }

            getCompetenciaPorId(id: string): Promise<Competencia>{
                return this.http.get('http://localhost:8000/competencia/'+id+'?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Competencia)
            }

            getAssessments(): Promise<Assessment[]>{
                return this.http.get('http://localhost:8000/assessment?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Assessment[])
            }

            getObjetivosPorCompetencia(id_competencia: string): Promise<Objetivo[]>{
                return this.http.get('http://localhost:8000/buscar_objetivos/?q='+id_competencia, {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Objetivo[])
            }

            getObjetivoAssessment(): Promise<Array<ObjetivoAssessment>>{
                return this.http.get('http://localhost:8000/objetivo_assessment?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Array<ObjetivoAssessment>)
            }

            getMomentoEvaluativo(): Promise<MomentoEvaluativo[]>{
                return this.http.get('http://localhost:8000/momento_evaluativo?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as MomentoEvaluativo[])
            }

            getEvaluacion():  Promise<Evaluacion[]>{
                return this.http.get('http://localhost:8000/evaluacion?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Evaluacion[])
            }

            getPonderacion(): Promise<VariablesConfiguracion>{
                return this.http.get('http://localhost:8000/variables_configuracion/1?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as VariablesConfiguracion)
            }

            getCursoById(id_curso:number): Promise<Curso>{
                return this.http.get('http://localhost:8000/curso/'+id_curso+'?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Curso)
            }

            getCursos(): Promise<Curso[]>{
                return this.http.get('http://localhost:8000/curso?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Curso[])
            }

            getUsuarioPerfil(): Promise<UsuarioPerfil[]>{
                return this.http.get('http://localhost:8000/usuario_perfil?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as UsuarioPerfil[])
            }

            getUsuarioCurso(): Promise<UsuarioCurso[]>{
                return this.http.get('http://localhost:8000/usuario_curso?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as UsuarioCurso[])
            }


            //Métodos POST

            crearObjetivoAssessment(objetivoAssessment: ObjetivoAssessment): Observable<ObjetivoAssessment>{
                return this.http2.post<ObjetivoAssessment>('http://localhost:8000/objetivo_assessment',objetivoAssessment)
                
            }

            crearMomentoEvaluativo(momentoEvaluativo: MomentoEvaluativo): Observable<MomentoEvaluativo>{
                return this.http2.post<MomentoEvaluativo>('http://localhost:8000/momento_evaluativo',momentoEvaluativo)
                
            }

            crearEvaluacion(evaluacion: Evaluacion): Observable<Evaluacion>{
                return this.http2.post<Evaluacion>('http://localhost:8000/evaluacion',evaluacion)
            
            }
}


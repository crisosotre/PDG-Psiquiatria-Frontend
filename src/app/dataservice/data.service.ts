import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
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

@Injectable()
export class dataService {

    constructor(private http: Http ){}

        private headers = new Headers({'Content-Type': 'application/json'});

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
}


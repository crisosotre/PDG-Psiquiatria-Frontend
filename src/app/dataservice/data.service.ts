import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Profesor } from './profesor'
import { Estudiante } from './estudiante';
import { Competencia} from './competencia';

@Injectable()
export class dataService {

    constructor(private http: Http ){}

        private headers = new Headers({'Content-Type': 'application/json'});

            getProfesor(): Promise<Profesor>{
                return this.http.get('http://localhost:8000/usuario/1?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Profesor)
            }

            getEstudiantes(): Promise<Estudiante[]>{
                return this.http.get('http://localhost:8000/usuario?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Estudiante[])
            }

            getCompetencias(): Promise<Competencia[]>{
                return this.http.get('http://localhost:8000/competencia?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Competencia[])
            }


}


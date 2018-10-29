import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Profesor } from './profesor'
import { Estudiante } from './estudiante';

@Injectable()
export class dataService {

    constructor(private http: Http ){}

        private headers = new Headers({'Content-Type': 'application/json'});

            getProfesores(): Promise<Profesor[]>{
                return this.http.get('http://localhost:8000/profesor?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Profesor[])
            }

            getEstudiantes(): Promise<Estudiante[]>{
                return this.http.get('http://localhost:8000/estudiante?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Estudiante[])
            }

}


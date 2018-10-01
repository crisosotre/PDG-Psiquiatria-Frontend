import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Profesor } from './profesor'

@Injectable()
export class dataService {

    constructor(private http: Http ){}

        private headers = new Headers({'Content-Type': 'application/json'});

            getProfesores(): Promise<Profesor[]>{
                return this.http.get('http://localhost:8000/profesor?format=json', {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Profesor[])
            }

}


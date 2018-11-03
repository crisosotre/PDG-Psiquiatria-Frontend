import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from './../../dataservice/estudiante';
import { Competencia } from './../../dataservice/competencia';
import { dataService } from './../../dataservice/data.service';
@Component({
  selector: 'app-card-estudiante',
  templateUrl: './card-estudiante.component.html',
  styleUrls: ['./card-estudiante.component.css']
})
export class CardEstudianteComponent implements OnInit {

  @Input() est: Estudiante;
  competencias: Competencia[];

  getCompetencias() : void {
    this.dataService.getCompetencias().then(competencias => this.competencias = competencias);
  }

  constructor(private dataService: dataService,private competencia: Competencia) { }

  ngOnInit() {
    this.getCompetencias();
  }

}

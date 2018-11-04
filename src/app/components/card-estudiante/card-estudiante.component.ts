import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from './../../dataservice/estudiante';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Globals } from "./../../dataservice/globals";

@Component({
  selector: 'app-card-estudiante',
  templateUrl: './card-estudiante.component.html',
  styleUrls: ['./card-estudiante.component.css']
})
export class CardEstudianteComponent implements OnInit {

  @Input() est: Estudiante;

  seleccionado: Estudiante;


  constructor(private modalService: NgbModal, private router: Router, private globals: Globals) { }

  ngOnInit() {
  
  }

  abrir(content,estudiante: Estudiante){
    this.seleccionado = estudiante;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  enviarValores(numCompetencia: number){
    console.log(this.seleccionado.nombre);
    this.globals.estudiante = this.seleccionado;
    console.log(numCompetencia);
    this.globals.id_competencia=numCompetencia;
    this.router.navigate(['evaluacion']);
    this.modalService.dismissAll();

  }

}

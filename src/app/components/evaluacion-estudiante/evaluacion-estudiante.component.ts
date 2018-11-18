import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from "./../../dataservice/globals";
import { Estudiante } from 'src/app/dataservice/estudiante';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-evaluacion-estudiante',
  templateUrl: './evaluacion-estudiante.component.html',
  styleUrls: ['./evaluacion-estudiante.component.css']
})
export class EvaluacionEstudianteComponent implements OnInit {

  estudiante: Estudiante;
  compSeleccionada: string;

  constructor(private modalService: NgbModal, private router: Router, private globals: Globals) { }

  ngOnInit() {
  }

  abrir(content){
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  enviarValores(valor: string){
    this.globals.estudiante = this.estudiante;
    console.log(valor);
    this.valorCompetencia(valor);
    console.log(this.compSeleccionada);
    this.globals.id_competencia=this.compSeleccionada;
    this.router.navigateByUrl('/autoevaluacion');
    this.modalService.dismissAll();

  }

  valorCompetencia(valor: string){
    console.log(valor);
    this.compSeleccionada = valor;
  }

}

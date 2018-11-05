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
  compSeleccionada: string;


  constructor(private modalService: NgbModal, private router: Router, private globals: Globals) { }

  ngOnInit() {
  
  }

  abrir(content,estudiante: Estudiante){
    this.seleccionado = estudiante;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  enviarValores(valor: string){
    console.log(this.seleccionado.nombre);
    this.globals.estudiante = this.seleccionado;
    console.log(valor);
    this.valorCompetencia(valor);
    console.log(this.compSeleccionada);
    this.globals.id_competencia=this.compSeleccionada;
    this.router.navigateByUrl('/evaluacion');
    this.modalService.dismissAll();

  }

  valorCompetencia(valor: string){
    console.log(valor);
    this.compSeleccionada = valor;
  }

}

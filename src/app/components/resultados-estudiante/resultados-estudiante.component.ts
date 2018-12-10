import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados-estudiante',
  templateUrl: './resultados-estudiante.component.html',
  styleUrls: ['./resultados-estudiante.component.css']
})
export class ResultadosEstudianteComponent implements OnInit {

  //Grafica de lineas
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
  }

}

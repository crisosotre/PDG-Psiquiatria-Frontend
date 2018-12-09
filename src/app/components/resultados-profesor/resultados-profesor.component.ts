import { Component, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-resultados-profesor',
  templateUrl: './resultados-profesor.component.html',
  styleUrls: ['./resultados-profesor.component.css']
})
export class ResultadosProfesorComponent implements OnInit {

  curso: string;

  public doughnutChartLabels:string[] = ['Saber: 33.3%', 'Hacer: 33.3%', 'Ser: 33.3%'];
  public doughnutChartData:number[] = [33.3, 33.3, 33.3];
  public doughnutChartType:string = 'doughnut';
  public options = {
    legend: {
      display: true,
      fullWidth: true,
      responsive: true,
      maintainAspectRatio: true,
      position: 'bottom',
      labels: {
        defaultFontFamily: "'Roboto'",
        fontSize:	14,
        fontColor: 'rgb(0, 0, 0)'
      }
    },
    tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
          return previousValue + currentValue;
        });
        var currentValue = dataset.data[tooltipItem.index];
        var percentage = currentValue;         
        return percentage + "%";
      }
    }
  }
  };

  constructor() { }

  ngOnInit() {

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  buscarCurso() {

  }

}

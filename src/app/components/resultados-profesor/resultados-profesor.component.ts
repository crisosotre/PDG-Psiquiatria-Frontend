import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resultados-profesor',
  templateUrl: './resultados-profesor.component.html',
  styleUrls: ['./resultados-profesor.component.css']
})
export class ResultadosProfesorComponent implements OnInit {

  curso: string;

  //Grafica de dona
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

  //Grafica de lineas
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

//Grafico de barras
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

//Grafica de torta
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
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

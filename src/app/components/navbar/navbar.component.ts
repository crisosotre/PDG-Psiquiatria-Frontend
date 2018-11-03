import { Component, OnInit } from '@angular/core';
import { dataService } from './../../dataservice/data.service';
import { Profesor } from './../../dataservice/profesor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profesor : Profesor;

  constructor(private dataService: dataService) { }

  getProfesor() : void {
    this.dataService.getProfesor().then(profesor => this.profesor = profesor);
  }

  ngOnInit() {
    this.getProfesor();
    console.log(this.profesor);
  }

}

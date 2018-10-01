import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { EvaluacionProfesorComponent } from './components/evaluacion-profesor/evaluacion-profesor.component';
import { dataService } from './dataservice/data.service';
import { HttpModule } from '@angular/http';
import { Profesor } from './dataservice/profesor';

@NgModule({
  declarations: [
    AppComponent,
    EvaluacionProfesorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpModule,
  ],
  providers: [dataService,  Profesor],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { EvaluacionProfesorComponent } from './components/evaluacion-profesor/evaluacion-profesor.component';
import { dataService } from './dataservice/data.service';
import { HttpModule } from '@angular/http';
import { Profesor } from './dataservice/profesor';
import { Estudiante } from './dataservice/estudiante';
import { Competencia } from './dataservice/competencia';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { EvaluacionEstudianteComponent } from './components/evaluacion-estudiante/evaluacion-estudiante.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { LoginComponent } from './components/login/login.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ResultadosEstudianteComponent } from './components/resultados-estudiante/resultados-estudiante.component';
import { ResultadosProfesorComponent } from './components/resultados-profesor/resultados-profesor.component';
import { CardEstudianteComponent } from './components/card-estudiante/card-estudiante.component';
import { AdministradorComponent } from './components/administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluacionProfesorComponent,
    EvaluacionComponent,
    EvaluacionEstudianteComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    LoginComponent,
    EncuestaComponent,
    ResultadosEstudianteComponent,
    ResultadosProfesorComponent,
    CardEstudianteComponent,
    AdministradorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpModule,
  ],
  providers: [dataService,  Profesor, Estudiante, Competencia],
  bootstrap: [AppComponent]
})
export class AppModule { }

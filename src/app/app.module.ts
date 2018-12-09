import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { EvaluacionProfesorComponent } from './components/evaluacion-profesor/evaluacion-profesor.component';
import { dataService } from './dataservice/data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
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
import { EvaluacionService } from './services/evaluacion.service';
import { Globals } from './dataservice/globals';
import { Assessment } from './dataservice/assessment';
import { CompetenciaCurso } from './dataservice/competencia-curso';
import { CompetenciaObjetivo } from './dataservice/competencia-objetivo';
import { Curso } from './dataservice/curso';
import { Evaluacion } from './dataservice/evaluacion';
import { MomentoEvaluativo } from './dataservice/momento-evaluativo';
import { ObjetivoAssessment } from './dataservice/objetivo-assessment';
import { Objetivo } from './dataservice/objetivo';
import { Perfil } from './dataservice/perfil'; 
import { TipoAssessment } from './dataservice/tipo-assessment';
import { TipoObjetivo } from './dataservice/tipo-objetivo';
import { VariablesConfiguracion } from './dataservice/variables-configuracion';
import { UsuarioPerfil } from './dataservice/usuario-perfil';
import { UsuarioCurso } from './dataservice/usuario-curso';
import { AutoevaluacionComponent } from './components/autoevaluacion/autoevaluacion.component';
import { ChartsModule } from 'ng2-charts';

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
    AdministradorComponent,
    AutoevaluacionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    dataService,  
    Profesor, 
    Estudiante, 
    Competencia, 
    EvaluacionService, 
    Globals,
    Assessment,
    CompetenciaCurso,
    CompetenciaObjetivo,
    Curso,
    Evaluacion,
    MomentoEvaluativo,
    ObjetivoAssessment,
    Objetivo,
    Perfil,
    TipoAssessment,
    TipoObjetivo,
    VariablesConfiguracion,
    UsuarioPerfil,
    UsuarioCurso
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

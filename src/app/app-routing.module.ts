import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EvaluacionProfesorComponent} from './components/evaluacion-profesor/evaluacion-profesor.component';
import {EvaluacionComponent} from './components/evaluacion/evaluacion.component';
import { EvaluacionEstudianteComponent } from './components/evaluacion-estudiante/evaluacion-estudiante.component';
import { AutoevaluacionComponent } from './components/autoevaluacion/autoevaluacion.component';
import { LoginComponent } from './components/login/login.component';
import { ResultadosEstudianteComponent } from './components/resultados-estudiante/resultados-estudiante.component';
import { ResultadosProfesorComponent } from './components/resultados-profesor/resultados-profesor.component';


const appRoutes:Routes = [

{
  path:'',
  component:EvaluacionProfesorComponent,

},
{
  path:'evaluacion',
  component:EvaluacionComponent,
},
{
  path:'evaluacion_estudiante',
  component:EvaluacionEstudianteComponent,
},
{
  path:'autoevaluacion',
  component:AutoevaluacionComponent,
},
{
  path:'login',
  component:LoginComponent,
},
{
  path:'resultados_estudiante',
  component:ResultadosEstudianteComponent,
},
{
  path:'resultados_profesor',
  component:ResultadosProfesorComponent,
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
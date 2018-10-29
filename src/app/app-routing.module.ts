import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EvaluacionProfesorComponent} from './components/evaluacion-profesor/evaluacion-profesor.component';
import {EvaluacionComponent} from './components/evaluacion/evaluacion.component';


const appRoutes:Routes = [
{
  path:'',
  component:EvaluacionProfesorComponent,

},
{
  path:'evaluacion',
  component: EvaluacionComponent,
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
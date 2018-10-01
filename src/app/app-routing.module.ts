import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EvaluacionProfesorComponent} from './components/evaluacion-profesor/evaluacion-profesor.component';


const appRoutes:Routes = [
{
  path:'',
  component:EvaluacionProfesorComponent,

},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
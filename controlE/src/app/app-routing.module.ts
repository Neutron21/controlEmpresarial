import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaizComponent } from './Components/raiz/raiz.component';
import { ColaboradoresComponent } from './Components/colaboradores/colaboradores.component';


const routes: Routes = [
  { path: '', component: RaizComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

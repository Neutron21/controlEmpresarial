import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaizComponent } from './Components/raiz/raiz.component';
import { ColaboradoresComponent } from './Components/colaboradores/colaboradores.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { PreguntasComponent } from './Components/preguntas/preguntas.component';
import { BlogComponent } from './Components/blog/blog.component';

const routes: Routes = [
  { path: '', component: RaizComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

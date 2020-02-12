import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RaizComponent } from './Components/raiz/raiz.component';
import { ColaboradoresComponent } from './Components/colaboradores/colaboradores.component';
import { PreguntasComponent } from './Components/preguntas/preguntas.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { BlogComponent } from './Components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './Services/dataServices';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    RaizComponent,
    ColaboradoresComponent,
    PreguntasComponent,
    ContactoComponent,
    ServiciosComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }

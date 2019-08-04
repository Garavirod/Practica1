import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// RUTAS
import { APP_ROUTING } from './app.routes';
// SERVICIES
import { GimeProjectService } from './services/gime-project.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PortadaComponent } from './components/portada/portada.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PortadaComponent,
    AboutComponent,
    PortafolioComponent,
    ContactoComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
    GimeProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

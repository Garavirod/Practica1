import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';



const APP_ROUTES: Routes = [
    {path: 'portada', component: PortadaComponent},
    {path: 'about', component: AboutComponent},
    {path: 'portafolio', component: PortafolioComponent},
    {path: 'contacto', component: ContactoComponent},
    // Esta ruta es por si ninguna de las anteriores hace match
    {path: '**', pathMatch: 'full', redirectTo: 'portada'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

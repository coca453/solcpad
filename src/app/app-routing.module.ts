import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { FotogaleriaComponent } from './pages/fotogaleria/fotogaleria.component';
import { VideotecaComponent } from './pages/videoteca/videoteca.component';
import { SociosComponent } from './pages/socios/socios.component';
import { InvestigacionesComponent } from './pages/investigaciones/investigaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Congreso2020Component } from './pages/congreso2020/congreso2020.component';
import { EntrevistasComponent } from './pages/entrevistas/entrevistas.component';
import { MaterialSociosComponent } from './pages/material-socios/material-socios.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'institucional/quienes-somos', component: QuienesSomosComponent },
  { path: 'institucional/miembros', component: MiembrosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'entrevistas', component: EntrevistasComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'fotogaleria', component: FotogaleriaComponent },
  { path: 'videoteca', component: VideotecaComponent },
  { path: 'socios', component: SociosComponent },
  { path: 'investigaciones', component: InvestigacionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'congreso-2020', component: Congreso2020Component },
  { path: 'material-socios', component: MaterialSociosComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }

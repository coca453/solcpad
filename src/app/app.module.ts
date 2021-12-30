import { RecaptchaModule } from 'ng-recaptcha';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { BrandComponent } from './header/brand/brand.component';
import { MediaItemComponent } from './media/media-item/media-item.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { FotogaleriaComponent } from './pages/fotogaleria/fotogaleria.component';
import { VideotecaComponent } from './pages/videoteca/videoteca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { ArgComponent } from './pages/miembros/arg/arg.component';
import { ChiComponent } from './pages/miembros/chi/chi.component';
import { UruComponent } from './pages/miembros/uru/uru.component';
import { ParComponent } from './pages/miembros/par/par.component';
import { BolComponent } from './pages/miembros/bol/bol.component';
import { PerComponent } from './pages/miembros/per/per.component';
import { EcuComponent } from './pages/miembros/ecu/ecu.component';
import { ColComponent } from './pages/miembros/col/col.component';
import { VenComponent } from './pages/miembros/ven/ven.component';
import { CosComponent } from './pages/miembros/cos/cos.component';
import { MexComponent } from './pages/miembros/mex/mex.component';
import { PueComponent } from './pages/miembros/pue/pue.component';
import { CubComponent } from './pages/miembros/cub/cub.component';
import { SociosComponent } from './pages/socios/socios.component';
import { InvestigacionesComponent } from './pages/investigaciones/investigaciones.component';

import { ArticuloService } from './services/articulo.service';
import { NoticiaService } from './services/noticia.service';
import { VideoService } from './services/video.service';
import { ContactoService } from './services/contacto.service';
import { FotogaleriaService } from './services/fotogaleria.service';
import { SocioService } from './services/socio.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Congreso2020Component } from './pages/congreso2020/congreso2020.component';
import { EntrevistasComponent } from './pages/entrevistas/entrevistas.component';
import { EntrevistaService } from './services/entrevista.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { MaterialSociosComponent } from './pages/material-socios/material-socios.component';
import { DocumentoService } from './services/documento.service';
import { VideoPrivateService } from './services/videoprivate.service';
import { BraComponent } from './pages/miembros/bra/bra.component';


@NgModule({

  declarations: [

    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TopBarComponent,
    BrandComponent,
    MediaItemComponent,
    HomeComponent,
    NotFoundComponent,
    ArticulosComponent,
    FotogaleriaComponent,
    VideotecaComponent,
    ContactoComponent,
    FooterComponent,
    QuienesSomosComponent,
    MiembrosComponent,
    SociosComponent,
    InvestigacionesComponent,
    NoticiasComponent,
    EntrevistasComponent,
    ArgComponent,
    BraComponent,
    ChiComponent,
    UruComponent,
    ParComponent,
    BolComponent,
    PerComponent,
    EcuComponent,
    ColComponent,
    VenComponent,
    CosComponent,
    MexComponent,
    PueComponent,
    CubComponent,
    Congreso2020Component,
    MaterialSociosComponent
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    FileUploadModule,
    NgxSpinnerModule
  ],

  providers: [

    ArticuloService,
    NoticiaService,
    EntrevistaService,
    VideoService,
    ContactoService,
    FotogaleriaService,
    SocioService,
    DocumentoService,
    VideoPrivateService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

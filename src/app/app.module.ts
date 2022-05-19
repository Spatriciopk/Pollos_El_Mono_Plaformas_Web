import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {GoogleMapsModule} from '@angular/google-maps'
import { AppComponent } from './app.component';
import { InicioComponent } from './index/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';
import { DataService } from './data.service';
import { PromocionComponent } from './promocion/promocion.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorProductosComponent } from './administrador-productos/administrador-productos.component';
import { MenuadministradorComponent } from './menuadministrador/menuadministrador.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import {DatePipe} from '@angular/common';

const rutas:Route [] = [
  {path : 'index' , component : InicioComponent },
  {path : 'productos' , component : ProductosComponent },
  {path : 'promocion' , component : PromocionComponent },
  {path : 'administrador' , component : AdministradorComponent },
  {path : 'adminProduc' , component : AdministradorProductosComponent },
  {path : 'reservacion' , component : ReservacionesComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    MenuComponent,
    PromocionComponent,
    AdministradorComponent,
    AdministradorProductosComponent,
    MenuadministradorComponent,
    ReservacionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [DataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

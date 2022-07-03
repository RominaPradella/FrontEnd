import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroRoutingModule } from './tablero-routing.module';
import { ModangularModule } from '../modangular/modangular.module';
import { TableroComponent } from './tablero.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    TableroComponent,
    InicioComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TableroRoutingModule,
    ModangularModule
  ]
})
export class TableroModule { }

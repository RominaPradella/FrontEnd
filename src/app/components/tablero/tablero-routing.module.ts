import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TableroComponent } from './tablero.component';

const routes: Routes = [
  {path: '', component: TableroComponent, children: [
    {path: '', component: InicioComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroRoutingModule { }

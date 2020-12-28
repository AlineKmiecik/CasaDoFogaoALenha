import { ContatoComponent } from './views/contato/contato.component';
import { FogoesEstufasComponent } from './views/fogoes-estufas/fogoes-estufas.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: FogoesEstufasComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

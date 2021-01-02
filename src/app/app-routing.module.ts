import { FogoesEstufasComponent } from './views/fogoes-estufas/fogoes-estufas.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { ContatoComponent } from './views/contato/contato.component';

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
    path: "produtos/produto/:id",
    component: ProdutoComponent
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

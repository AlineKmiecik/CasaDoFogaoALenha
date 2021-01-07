//import { FogoesEstufasComponent } from './views/fogoes-estufas/fogoes-estufas.component';
//import { ProdutoComponent } from './views/produto/produto.component';
import { ContatoComponent } from './views/contato/contato.component';

import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//

const routes: Routes = [

  {path: "produtos" , loadChildren: () => import('src/app/views/fogoes-estufas/produtos.module').then(m => m.ProdutosModule) 
  //loadChildren: 'src/app/views/fogoes-estufas/produtos.module.ts#ProdutosModule'
  },

  {path: "", component: HomeComponent},
  {path: "contato",component: ContatoComponent}
  /*
  {
    path: "produtos",component: FogoesEstufasComponent
  },
  {
    path: "produtos/produto/:id",
    component: ProdutoComponent
  },
  {
    path: "produtos/:filtro",
    component: FogoesEstufasComponent
  },
  */
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

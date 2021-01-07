import { ComentariosComponent } from './../produto/comentarios/comentarios.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoComponent } from "../produto/produto.component";
import { FogoesEstufasComponent } from "./fogoes-estufas.component";


const produtosRoutes: Routes = [
    {path: "",component: FogoesEstufasComponent},
    {path: "produto/:id", component: ProdutoComponent, children:[
      {path: "comentarios", component: ComentariosComponent}
    ]},
    {path: ":filtro",component: FogoesEstufasComponent}
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(produtosRoutes)],
    exports: [RouterModule]
  })
  export class ProdutosRoutingModule { }
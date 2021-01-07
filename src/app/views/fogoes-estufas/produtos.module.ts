import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from 'src/app/app-routing.module';
//import { RouterModule } from '@angular/router';
import { ProdutoComponent } from '../produto/produto.component';
import { FogoesEstufasComponent } from './fogoes-estufas.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ProdutosRoutingModule } from './produtos.routing.module';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    ProdutoComponent,
    FogoesEstufasComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    //RouterModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    ProdutosRoutingModule,
    MatIconModule
  ],
  providers:[
    ProdutosService
  ]
})
export class ProdutosModule { }

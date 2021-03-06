//import { ModalContatoComponent } from './views/modal-contato/modal-contato.component';
//import { ContatoComponent } from './views/contato/contato.component';
//import { ProdutoComponent } from './views/produto/produto.component';

//import { FogoesEstufasComponent } from './views/fogoes-estufas/fogoes-estufas.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { HomeComponent } from './views/home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './component/footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';


import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { ContatoModule } from './views/contato/contato.modules';
//import { ProdutosModule } from './views/fogoes-estufas/produtos.module';
import { ComentariosComponent } from './views/produto/comentarios/comentarios.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ComentariosComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    ModalModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    ContatoModule,
    MatAutocompleteModule
    //ProdutosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

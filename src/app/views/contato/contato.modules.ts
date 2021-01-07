import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalContatoComponent } from '../modal-contato/modal-contato.component';
import { ContatoComponent } from './contato.component';


import { HttpClientModule } from '@angular/common/http';
import { ContatoService } from 'src/app/services/contato.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ModalContatoComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot(),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    ContatoService
  ],
  exports:[

  ]
})
export class ContatoModule { }
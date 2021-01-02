import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { MatDialog } from '@angular/material/dialog';
import { ModalContatoComponent } from '../modal-contato/modal-contato.component';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  ContatoCliente : Contato = new Contato();

  constructor(private ContatoService: ContatoService, public dialog: MatDialog) {
    
  }

  ngOnInit(): void {

  }

  CadastrarContato(){
    let contatoAux: Contato = this.ContatoCliente;
    this.ContatoCliente = new Contato();
    this.ContatoService.CadastrarContato(contatoAux).subscribe();
    
  }

  openModal() {
    this.dialog.open(ModalContatoComponent);
 }

  


}

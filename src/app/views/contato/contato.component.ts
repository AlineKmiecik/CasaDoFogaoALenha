import { ContatoService } from './../../services/contato.service';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {


  @Input() ContatoCliente : Contato = new Contato();

   modalRef: BsModalRef;
  config = {
    animated: true
  };
  @ViewChild('template') template;

  constructor(private ContatoService: ContatoService, private modalService: BsModalService) {
    
  }

  ngOnInit(): void {

  }

  CadastrarContato(ContatoModal: Contato){
    this.ContatoCliente = new Contato();
    this.ContatoService.CadastrarContato(ContatoModal).subscribe();
    
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  closeModal(evento){
    console.log(evento.retorno);
    if(evento.retorno == "no"){
      this.modalRef.hide();
      this.ContatoCliente = new Contato();
    }else{
      console.log(evento.contato);
      this.CadastrarContato(evento.contato);
      this.modalRef.hide();
    }
  }



  


}

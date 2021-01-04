import { ContatoService } from './../../services/contato.service';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  inscricaoObservable: Subscription;
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
    this.inscricaoObservable = this.ContatoService.CadastrarContato(ContatoModal).subscribe(
      err => console.log('HTTP request', err),
      () => console.log('HTTP request completed.')
    );
    
  }

  closeModal(evento){
    console.log(evento.retorno);
    if(evento.retorno == "no"){
      document.getElementById('id01').style.display='none';
      this.ContatoCliente = new Contato();
    }else{
      this.CadastrarContato(evento.contato);
      document.getElementById('id01').style.display='none';
      this.ContatoCliente = new Contato();
    }
  }


  NgOnDestroy(){
    if(this.inscricaoObservable){
      this.inscricaoObservable.unsubscribe();
    }
  }

  


}

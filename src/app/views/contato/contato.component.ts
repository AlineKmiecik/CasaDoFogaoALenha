import { ContatoService } from './../../services/contato.service';
import { Component, Input, OnInit, TemplateRef, OnDestroy, NgModule } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  InscricaoObservable: Subscription;

  @Input() ContatoCliente : Contato = new Contato();

  @Input() FormularioContato: FormGroup;

  constructor(private ContatoService: ContatoService, private FormBuilder: FormBuilder ) {
    
  }

  ngOnInit(): void {
    this.FormularioContato = this.FormBuilder.group({
      Nome: [null, Validators.required],
      Email: [null, Validators.required],
      Assunto: [null, Validators.required],
      Mensagem: [null, Validators.required]
    });

  }

  onSubmit(){
    document.getElementById('id01').style.display='block';
  }


  cadastrarContato(ContatoModal: Contato){
    this.ContatoCliente = new Contato();
    this.InscricaoObservable = this.ContatoService.CadastrarContato(ContatoModal).subscribe(
      err => console.log('HTTP request', err),
      () => console.log('HTTP request completed.')
    );
    
  }

  closeModal(evento){
    console.log(evento.retorno);
    if(evento.retorno == "no"){
      document.getElementById('id01').style.display='none';
      this.FormularioContato.reset();
    }else{
      this.cadastrarContato(evento.contato);
      document.getElementById('id01').style.display='none';
      this.FormularioContato.reset();
    }
  }


  ngOnDestroy(){
    if(this.InscricaoObservable){
      this.InscricaoObservable.unsubscribe();
    }
  }

  


}

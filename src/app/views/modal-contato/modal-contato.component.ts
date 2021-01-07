import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css']
})
export class ModalContatoComponent implements OnInit {

  @Output() modalEvent = new EventEmitter();
  @Input()  FormularioContato: FormGroup;
  ContatoCliente: Contato = new Contato();
  RespotaBotao: string;

  inscricaoValueChanges: Subscription;

  constructor(private FormBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.onChangeFomulario();

  }

  onChangeFomulario(): void{
    this.inscricaoValueChanges = this.FormularioContato.valueChanges.subscribe(element =>{
      console.log(element);
      this.ContatoCliente.Nome = element.Nome;
      this.ContatoCliente.Assunto = element.Assunto;
      this.ContatoCliente.Email = element.Email;
      this.ContatoCliente.Mensagem = element.Mensagem;
    })
  }

  onSubmit(RespotaBotao){
    if(RespotaBotao=="no"){
      console.log(this.FormularioContato.controls);
      this.modalEvent.emit({retorno: "no"});

    }else{
      console.log("yes");
      this.modalEvent.emit({retorno: "yes", contato: this.ContatoCliente});
    }
  }

  decline(){
    this.modalEvent.emit({retorno: "no"});
  }
  confirm(){
    this.modalEvent.emit({retorno: "yes", contato: this.ContatoCliente});
  }

  ngOnDestroy(){
    this.inscricaoValueChanges.unsubscribe;
  }


}

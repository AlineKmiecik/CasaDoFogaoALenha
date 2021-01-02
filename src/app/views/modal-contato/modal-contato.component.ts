import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css']
})
export class ModalContatoComponent implements OnInit {

  @Output() modalEvent = new EventEmitter();

  @Input() ContatoCliente: Contato = new Contato();

  
  
  constructor() { }

  ngOnInit(): void {
  }

  decline(){
    this.modalEvent.emit({retorno: "no"});
  }
  confirm(){
    this.modalEvent.emit({retorno: "yes", contato: this.ContatoCliente});
  }

}

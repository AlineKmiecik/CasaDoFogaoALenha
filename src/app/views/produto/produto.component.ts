import { ProdutosService } from './../../services/produtos.service';
import { Produto } from './../../models/Produto';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  Quantidade: number = 0;
  inscricaoObservable: Subscription;

  @Output() AdicionarProdutoCarrinho = new EventEmitter();

  constructor(private route: ActivatedRoute, private ProdutosService:ProdutosService) { }

  ngOnInit(): void {
    this.inscricaoObservable = this.ProdutosService.getProduto(parseInt(this.route.snapshot.paramMap.get("id"))).subscribe((retorno)=>{
      this.produto = retorno;
    },
    err => console.log('HTTP Error', err)
    );
  }

  NgOnDestroy(){
    this.inscricaoObservable.unsubscribe();
    
  }

  





}

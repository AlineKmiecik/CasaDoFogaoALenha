import { Produto } from './../../models/Produto';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fogoes-estufas',
  templateUrl: './fogoes-estufas.component.html',
  styleUrls: ['./fogoes-estufas.component.css']
})
export class FogoesEstufasComponent implements OnInit {
  
  Produtos: Produto[]; 

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
  }

  getProdutos(){
 
    this.Produtos = this.produtosService.getFornos().concat(this.produtosService.getfogoes_estufas(), this.produtosService.getChapas());
    return this.Produtos;
  }

  filtroProdutos(){
    console.log("test");
  }
   testeBotao(){
     console.log("teste botao");
   }

  

}



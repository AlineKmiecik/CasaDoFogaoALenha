import { Produto } from '../../models/Produto';
import { ProdutosService } from '../../services/produtos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fogoes-estufas',
  templateUrl: './fogoes-estufas.component.html',
  styleUrls: ['./fogoes-estufas.component.css']
})
export class FogoesEstufasComponent implements OnInit {

  
  Produtos: Produto[]; 

  constructor(private produtosService: ProdutosService ) {

  }

  ngOnInit(): void {

    document.getElementById("FogoesEstufas").addEventListener("change", this.filtroProdutos);
    document.getElementById("Chapas").addEventListener("change", this.filtroProdutos);
    document.getElementById("Fornos").addEventListener("change", this.filtroProdutos);

  }

  getProdutos(){
    this.produtosService.getProdutos().subscribe(dados => {this.Produtos = dados});
    return this.Produtos;
  }

  filtroProdutos(){

    var FogoesEstufas = document.getElementById("FogoesEstufas")  as HTMLInputElement;
    var Chapas = document.getElementById("Chapas")  as HTMLInputElement;
    var Fornos = document.getElementById("Fornos")  as HTMLInputElement;
    
    if(FogoesEstufas.checked == true){
      console.log("FogoesEstufas marcado");
    }
    if(Chapas.checked == true){
      console.log("Chapas marcado");
    }
    if(Fornos.checked == true){
      console.log("Fornos marcado");
    }
    
  }

   testeBotao(){
     console.log("teste botao");
   }

  

}



import { Produto } from '../../models/Produto';
import { ProdutosService } from '../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fogoes-estufas',
  templateUrl: './fogoes-estufas.component.html',
  styleUrls: ['./fogoes-estufas.component.css']
})
export class FogoesEstufasComponent implements OnInit {

  Produtos: Produto[] = [];
  Produtos_generico: Produto[] = [];

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(dados => {
      this.Produtos = dados;
      console.log(this.Produtos);
    });
    console.log(this.Produtos);
    if(this.route.snapshot.paramMap.get("filtro")=="fogoes"){
        console.log(this.Produtos);


        this.Produtos.forEach(element => {
          if(element.marca == "fogao"){
            console.log("entrou");
          }
        });

    }else if(this.route.snapshot.paramMap.get("filtro") == "chapas"){
      console.log("Chapa");

    }else if(this.route.snapshot.paramMap.get("filtro") == "fornos"){
      console.log("Forno");
      

    }else{
      this.Produtos_generico = this.Produtos;
    }

    document.getElementById("FogoesEstufas").addEventListener("change", this.filtroProdutos);
    document.getElementById("Chapas").addEventListener("change", this.filtroProdutos);
    document.getElementById("Fornos").addEventListener("change", this.filtroProdutos);

  }

  getProdutos(){
    return this.Produtos_generico;
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



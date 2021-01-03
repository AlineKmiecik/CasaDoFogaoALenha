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

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(dados => {
      if(this.route.snapshot.paramMap.get("filtro")=="fogoes"){

        dados.forEach(element => {
          if(element.marca == "fogao"){
            this.Produtos.push(element);
          }
        });
        let Fogoes = document.getElementById("Fogoes")  as HTMLInputElement;
            Fogoes.checked = true;
            //settando valor do cache
            this.zerarCache();
            window.localStorage.setItem('Fogoes', "true");

  
      }else if(this.route.snapshot.paramMap.get("filtro") == "chapas"){
        
        dados.forEach(element => {
          if(element.marca == "Chapa"){
            this.Produtos.push(element);
          }
        });
        let Chapas = document.getElementById("Chapas")  as HTMLInputElement;
            Chapas.checked = true;
            this.zerarCache();
            window.localStorage.setItem('Chapas', "true");
  
      }else if(this.route.snapshot.paramMap.get("filtro") == "fornos"){
      
        dados.forEach(element => {
          if(element.marca == "Forno"){
            this.Produtos.push(element);
          }
        });
        let Fornos = document.getElementById("Fornos")  as HTMLInputElement;
            Fornos.checked = true;
            this.zerarCache();
            window.localStorage.setItem('Fornos', "true");
            
      
  
      }else{
        //verifica se há valores em cache
        
        let ProdutosAux: Produto[] =[];
        let cacheAux: boolean = false;
        if(window.localStorage.getItem('Fogoes') == "true"){
          cacheAux = true;
          dados.forEach(element => {
            if(element.marca == "fogao"){
              ProdutosAux.push(element);
            }
          });

          let Fogoes = document.getElementById("Fogoes")  as HTMLInputElement;
          Fogoes.checked = true;

        }
        if(window.localStorage.getItem('Chapas') == "true"){
          cacheAux = true;
          dados.forEach(element => {
            if(element.marca == "Chapa"){
              ProdutosAux.push(element);
            }
          });

          let Chapas = document.getElementById("Chapas")  as HTMLInputElement;
            Chapas.checked = true;
        }
        if(window.localStorage.getItem('Fornos') == "true"){
          cacheAux = true;
          dados.forEach(element => {
            if(element.marca == "Forno"){
              ProdutosAux.push(element);
            }
          });

          let Fornos = document.getElementById("Fornos")  as HTMLInputElement;
            Fornos.checked = true;
        }
        if(!cacheAux){
          this.Produtos = dados;
        }else{
          this.Produtos = ProdutosAux;
        }
      }
      
    });
    
    document.getElementById("Fogoes").addEventListener("change", this.filtroProdutos);
    document.getElementById("Chapas").addEventListener("change", this.filtroProdutos);
    document.getElementById("Fornos").addEventListener("change", this.filtroProdutos);
  }

  getProdutos(){
    return this.Produtos;
  }

  filtroProdutos(){

    let Fogoes = document.getElementById("Fogoes")  as HTMLInputElement;
    let Chapas = document.getElementById("Chapas")  as HTMLInputElement;
    let Fornos = document.getElementById("Fornos")  as HTMLInputElement;
    
    if(Fogoes.checked == true){
      window.localStorage.setItem('Fogoes', "true");
    }else{
      window.localStorage.setItem('Fogoes', "false");
    }
    if(Chapas.checked == true){
      window.localStorage.setItem('Chapas', "true");
    }else{
      window.localStorage.setItem('Chapas', "false");
    }
    if(Fornos.checked == true){
      window.localStorage.setItem('Fornos', "true");
    }else{
      window.localStorage.setItem('Fornos', "false");
    }

    window.location.href = "http://localhost:4200/produtos";
    
  }

  testeBotao(){
     console.log("teste botao");
  }

  zerarCache(){
    window.localStorage.setItem('Fornos', "false");
    window.localStorage.setItem('Chapas', "false");
    window.localStorage.setItem('Fogoes', "false");
  }

  

}



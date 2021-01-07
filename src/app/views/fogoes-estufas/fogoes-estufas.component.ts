import { FormGroup, FormBuilder } from '@angular/forms';
import { Produto } from '../../models/Produto';
import { ProdutosService } from '../../services/produtos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-fogoes-estufas',
  templateUrl: './fogoes-estufas.component.html',
  styleUrls: ['./fogoes-estufas.component.css']
})
export class FogoesEstufasComponent implements OnInit {

  Produtos: Produto[] = [];
  InscricaoSubscribe: Subscription; 

  FiltragemProdutos: FormGroup;
  CategoriasProdutos: string[] = [];

  FogoesCheckbox:boolean = false;
  FornosCheckbox:boolean = false;
  ChapasCheckBox:boolean = false;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private FormBuilder: FormBuilder ) {

  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("filtro") != null){
      this.CategoriasProdutos.push(this.route.snapshot.paramMap.get("filtro"));
      this.InscricaoSubscribe =this.InscricaoSubscribe = this.produtosService.getProdutosCategoria(this.CategoriasProdutos).subscribe(dados=>{this.Produtos = this.Produtos.concat(dados);});
    }else{
      let ValidaSeHaLocalStorage: boolean = false;

      if(window.localStorage.getItem('fogoes') == "true"){
        ValidaSeHaLocalStorage = true;
        this.CategoriasProdutos.push("fogoes");
      }
      if(window.localStorage.getItem('chapas') == "true"){
        ValidaSeHaLocalStorage = true;
        this.CategoriasProdutos.push("chapas");
      }
      if(window.localStorage.getItem('fornos') == "true"){
        ValidaSeHaLocalStorage = true;
        this.CategoriasProdutos.push("fornos");
      }

      if(ValidaSeHaLocalStorage){
        this.InscricaoSubscribe = this.produtosService.getProdutosCategoria(this.CategoriasProdutos).subscribe(dados =>{
          this.Produtos = dados;
        });
      }else{
       this.InscricaoSubscribe = this.InscricaoSubscribe = this.produtosService.getProdutos().subscribe(dados => {this.Produtos=dados});
      } 
    }
    this.setCheckBoxCacheStatus();

    this.FiltragemProdutos = this.FormBuilder.group({
      Fogoes: [this.FogoesCheckbox],
      Chapas: [this.ChapasCheckBox],
      Fornos: [this.FornosCheckbox]
    });

    this.filtroProdutos();
  
  }

  getProdutos(){
    return this.Produtos;
  }

  filtroProdutos(){
    this.FiltragemProdutos.valueChanges.subscribe(StatusCheckbox =>{
      if(StatusCheckbox.Fogoes == true){
        window.localStorage.setItem('fogoes', "true");
      }else{
        window.localStorage.setItem('fogoes', "false");
      }
      if(StatusCheckbox.Chapas == true){
        window.localStorage.setItem('chapas', "true");
      }else{
        window.localStorage.setItem('chapas', "false");
      }
      if(StatusCheckbox.Fornos == true){
        window.localStorage.setItem('fornos', "true");
      }else{
        window.localStorage.setItem('fornos', "false");
      }
      window.location.href = "http://localhost:4200/produtos";
    });
    
    
  }

  setCheckBoxCacheStatus(){
    this.zerarCache();
    this.CategoriasProdutos.forEach(categoria => {
      if(categoria=="fornos"){
        window.localStorage.setItem('fornos', "true");
        this.FornosCheckbox = true;
      }else if(categoria=="chapas"){
        window.localStorage.setItem('chapas', "true");
        this.ChapasCheckBox=true;
      }else if(categoria=="fogoes"){
        window.localStorage.setItem('fogoes', "true");
        this.FogoesCheckbox=true;
      }
    });
  }

  zerarCache(){
    window.localStorage.setItem('fornos', "false");
    window.localStorage.setItem('chapas', "false");
    window.localStorage.setItem('fogoes', "false");
  }

  ngOnDestroy(){
    this.InscricaoSubscribe.unsubscribe();
    
  }

  

}



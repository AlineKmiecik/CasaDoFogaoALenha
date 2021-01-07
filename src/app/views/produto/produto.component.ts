import { ProdutosService } from './../../services/produtos.service';
import { Produto } from './../../models/Produto';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comentario } from 'src/app/models/Comentario';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  Quantidade: number = 0;
  InscricaoObservable: Subscription;

  @Output() AdicionarProdutoCarrinho = new EventEmitter();
  Comentario: Comentario = new Comentario();
  inscricaoComentarioFavorito: Subscription;

  constructor(private route: ActivatedRoute, private ProdutosService:ProdutosService) { }

  ngOnInit(): void {
    this.InscricaoObservable = this.ProdutosService.getProduto(parseInt(this.route.snapshot.paramMap.get("id"))).subscribe((retorno)=>{
      this.produto = retorno;
    },
    err => console.log('HTTP Error', err)
    );
    console.log(this.Comentario);
    this.setComentarioFavorito();
  }

  setComentarioFavorito() {
    this.inscricaoComentarioFavorito = this.ProdutosService.ComentarioFavorito.subscribe(dados =>{
      this.Comentario = dados;
      console.log(dados);
      console.log(this.Comentario);
    });
  }

  ngOnDestroy(){
    this.InscricaoObservable.unsubscribe();
    this.inscricaoComentarioFavorito.unsubscribe();
    
  }

  





}

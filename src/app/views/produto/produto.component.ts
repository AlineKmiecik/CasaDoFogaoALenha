import { ProdutosService } from './../../services/produtos.service';
import { Produto } from './../../models/Produto';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  Quantidade: number = 0;

  @Output() AdicionarProdutoCarrinho = new EventEmitter();

  constructor(private route: ActivatedRoute, private ProdutosService:ProdutosService) { }

  ngOnInit(): void {
    this.ProdutosService.getProduto(parseInt(this.route.snapshot.paramMap.get("id"))).subscribe((retorno)=>{
      this.produto = retorno;
    });
  }

  





}

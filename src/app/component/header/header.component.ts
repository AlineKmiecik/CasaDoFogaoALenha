
import { debounceTime, switchMap } from 'rxjs/operators';
import { ProdutosService } from 'src/app/services/produtos.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  FormularioBusca: FormGroup;
  inscricaoFormulario: Subscription;
  inscricaoService: Subscription;
  BuscaProdutos: Produto[] = [];
  

  pesquisa: Observable<any>;

  constructor(private FormBuilder: FormBuilder, private ProdutosService: ProdutosService) { }


  ngOnInit(): void {
    this.FormularioBusca = this.FormBuilder.group({
      busca: [null]
    });

    this.FormularioBusca.valueChanges.subscribe(valor =>{
      this.BuscaProdutos = [];
      this.ProdutosService.MenuBuscaProdutos(valor.busca).pipe(switchMap(produtos =>{
        //this.BuscaProdutos = produtos;
        return produtos;


        //pq manda um por um????
      })).subscribe( produtos => this.BuscaProdutos.push(produtos));
    });


  }

  ngOnDestroy(){
    this.inscricaoFormulario.unsubscribe();
  }



  

}

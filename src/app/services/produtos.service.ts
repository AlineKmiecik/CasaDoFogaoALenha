import { Comentario } from './../models/Comentario';
import { Observable, Subject, Subscription } from 'rxjs';
import { Produto } from './../models/Produto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { Comentario } from '../models/Comentario';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  inscricao: Subscription;
  private readonly BaseUrl = "http://localhost:3000/";
  public ComentarioFavorito = new Subject<Comentario>();

  public ProdutosCagetoria = new Subject<Produto[]>();
  
  
  constructor(private http: HttpClient) { } 

  MenuBuscaProdutos(texto: string){
    let ProdutosBuscados = new Subject<Produto[]>();
    let Produtos:Produto[] = [];
    this.inscricao = this.getProdutos().subscribe(dados=>{
      Produtos = Produtos.concat(dados.filter(produto=>{
        if(produto.nome.includes(texto)){
          return true;
        }else{
          return false;
        }
      }))
      ProdutosBuscados.next(Produtos);
    });
    //test.includes('World')
    return ProdutosBuscados;
  }

  setComentarioFavorito(value: Comentario) {
    this.ComentarioFavorito.next(value); 
    return this.ComentarioFavorito;
  }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.BaseUrl}produtos`);    
  }

  
  getProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.BaseUrl}produtos/${id}`);    
  }

  getProdutosCategoria(categorias: string[]){
    let ProdutosFiltrados: Produto[] = [];
    
    this.getProdutos().subscribe(produtos =>{
      categorias.forEach(categoria => {
        ProdutosFiltrados = ProdutosFiltrados.concat(produtos.filter(produto=>{
          if(produto.marca == categoria){
            return true;
          }else{
            return false;
          }
        }));
      });
      
      this.ProdutosCagetoria.next(ProdutosFiltrados);
    });

    
    return this.ProdutosCagetoria;

  }

  getComentariosProduto(id: number){
    let Comentarios: Comentario[] = [];

    this.getComentarios().forEach(element => {
      if(element.idProduto == id){
        Comentarios.push(element);
      }
    });
    return Comentarios;
  }

  getComentarios(){
    let Comentarios: Comentario[] = [];

    let ComentarioProduto: Comentario = new Comentario();
    ComentarioProduto.idProduto= 1;
    ComentarioProduto.Nome = "vivamus at augue eget arcu";
    ComentarioProduto.Comentario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non. Adipiscing elit ut aliquam purus sit amet. Facilisis volutpat est velit egestas dui id ornare arcu odio. Consequat semper viverra nam libero justo laoreet sit amet cursus.";
    Comentarios.push(ComentarioProduto);

    ComentarioProduto = new Comentario();
    ComentarioProduto.idProduto= 1;
    ComentarioProduto.Nome = "dipiscing elit sed do eiusmod tempor";
    ComentarioProduto.Comentario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non. Adipiscing elit ut aliquam purus sit amet. Facilisis volutpat est velit egestas dui id ornare arcu odio. Consequat semper viverra nam libero justo laoreet sit amet cursus.";
    Comentarios.push(ComentarioProduto);

    ComentarioProduto = new Comentario();
    ComentarioProduto.idProduto= 2;
    ComentarioProduto.Nome = "dolor sit amet ";
    ComentarioProduto.Comentario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore a. Donec ultrices tincidunt arcu non. Adipiscing elit ut aliquam purus sit amet. Facilisis volutpat est velit egestas dui id ornare arcu odio. Consequat semper viverra nam libero justo laoreet sit amet cursus.";
    Comentarios.push(ComentarioProduto);

    ComentarioProduto = new Comentario();
    ComentarioProduto.idProduto= 3;
    ComentarioProduto.Nome = "magna aliqu";
    ComentarioProduto.Comentario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non. Adipiscing elit ut aliquam purus sit amet. Facilisis volutpat est velit egestas dui id ornare arcu odio. Consequat semper viverra nam libero justo laoreet sit amet cursus.";
    Comentarios.push(ComentarioProduto);
    
    return Comentarios;

  }

}

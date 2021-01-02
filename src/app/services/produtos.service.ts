import { Observable } from 'rxjs';
import { Produto } from './../models/Produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly BaseUrl = "http://localhost:3000/";
  
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.BaseUrl}produtos`);    
  }

  
  getProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.BaseUrl}produtos/${id}`);    
  }

}

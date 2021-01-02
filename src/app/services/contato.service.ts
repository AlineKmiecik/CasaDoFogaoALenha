import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from "./../models/Contato";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly BaseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  CadastrarContato(Contato: Contato):Observable<Contato>{
    return this.http.post<Contato>(`${this.BaseUrl}contatos/`, Contato);
  }



}

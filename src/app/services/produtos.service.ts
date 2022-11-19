import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaModelos, ListaMontadoras, Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  createProdutos(produtos: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${environment.API_URL}/product/p-index`, produtos);
  }

  createMontadoras(montadoras: ListaMontadoras): Observable<ListaMontadoras> {
    return this.http.post<ListaMontadoras>(`${environment.API_URL}/automaker/p-index`, montadoras);
  }

  createModelos(modelos: ListaModelos): Observable<ListaModelos> {
    return this.http.post<ListaModelos>(`${environment.API_URL}/model/p-index`, modelos);
  }
}


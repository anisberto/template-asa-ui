import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaProdutos, ObjetoModelo, ObjetoMontadora } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(pagina: number): Observable<ListaProdutos> {
    return this.http.post<ListaProdutos>(`${environment.API_URL}/product/p-index`, {"page": pagina});
  }

  getMontadoras(pagina: number): Observable<ObjetoMontadora> {
    return this.http.post<ObjetoMontadora>(`${environment.API_URL}/automaker/p-index`, {"page": pagina});
  }

  getModelos(pagina: number): Observable<ObjetoModelo> {
    return this.http.post<ObjetoModelo>(`${environment.API_URL}/model/p-index`, {"page": pagina});
  }
}


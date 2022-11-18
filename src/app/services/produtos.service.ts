import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.API_URL}/catalogs/list-catalogs`);
  }
}
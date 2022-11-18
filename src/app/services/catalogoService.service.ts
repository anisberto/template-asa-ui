import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatalogoDeProdutos } from '../models/catalogoDeProdutos';

@Injectable({
  providedIn: 'root'
})
export class CatalogoServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<CatalogoDeProdutos[]> {
    return this.http.get<CatalogoDeProdutos[]>(`${environment.API_URL}/product/p-index`);
  }
}
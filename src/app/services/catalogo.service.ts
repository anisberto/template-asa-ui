import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalogo } from '../models/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(`${environment.API_URL}/catalogs/list-catalogs`);
  }
}
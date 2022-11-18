import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  createContato(contatoComponent: Contato): Observable<Contato> {
    return this.http.post<Contato>(`${environment.API_URL}/api.asamultipecas.com.br/request-contact/store`, contatoComponent);
  }
}
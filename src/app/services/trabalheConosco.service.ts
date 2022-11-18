import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrabalheConosco } from '../models/trabalheConosco';

@Injectable({
  providedIn: 'root'
})
export class TrabalheConoscoService {

  constructor(private http: HttpClient) { }

  createContato(trabalheConoscoComponent: TrabalheConosco): Observable<TrabalheConosco> {
    return this.http.post<TrabalheConosco>(`${environment.API_URL}/job-position`, trabalheConoscoComponent);
  }
}
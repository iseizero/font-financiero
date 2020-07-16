import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancesService {

  constructor(private http: HttpClient) { }

  getAllMetrics(): Observable<any> {
    return this.http.get(`http://localhost:4020/v1/api/numbers/all`);
  }
}

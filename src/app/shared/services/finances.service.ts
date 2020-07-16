import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancesService {

  constructor(private http: HttpClient) { }

  /**
   * @description Obtencion de todos los parametros económicos actuales
   */
  getAllMetrics(): Observable<any> {
    return this.http.get(`http://localhost:4020/v1/api/numbers/all`);
  }

  /**
   * @description Obtencion de parametros financieros especificos
   * @param key llave para obtener parametros financiaros especificos
   */
  getMetricsByKey(key): Observable<any> {
    return this.http.get(`http://localhost:4020/v1/api/numbers/values/${key}`);
  }
}

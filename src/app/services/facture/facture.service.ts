import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GlobalResponse } from '../../models/responses/Auth/GlobalResponse';
import { FactureResponse } from '../../models/responses/facture/facture-response';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrl = `${environment.apiUrl}/api/factures`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<GlobalResponse<FactureResponse[]>> {
    return this.http.get<GlobalResponse<FactureResponse[]>>(this.apiUrl);
  }

  findByTrackingId(trackingId: string): Observable<GlobalResponse<FactureResponse>> {
    return this.http.get<GlobalResponse<FactureResponse>>(`${this.apiUrl}/${trackingId}`);
  }

  createFromDevis(trackingId: string): Observable<GlobalResponse<FactureResponse>> {
    return this.http.get<GlobalResponse<FactureResponse>>(`${this.apiUrl}/save/${trackingId}`);
  }

  updateFacture(facture: any): Observable<GlobalResponse<FactureResponse>> {
    return this.http.put<GlobalResponse<FactureResponse>>(`${this.apiUrl}/${facture.trackingId}`, facture);
  }

  createFacture(facture: any): Observable<GlobalResponse<FactureResponse>> {
    return this.http.post<GlobalResponse<FactureResponse>>(this.apiUrl, facture);
  }
  
  updateStatus(trackingId: string, statut: string): Observable<GlobalResponse<FactureResponse>> {
    return this.http.put<GlobalResponse<FactureResponse>>(`${this.apiUrl}/${trackingId}/status`, { statut });
  }
}

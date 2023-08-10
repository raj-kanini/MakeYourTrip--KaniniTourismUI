// services/trade.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from '../model/trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private baseUrl = 'https://localhost:7023/api/BookingDetails'; 

  constructor(private http: HttpClient) { }

  // Create a new Trade
  createTrade(trade: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, trade);
  }

  // Get a Trade by ID
  getTradeById(tradeId: number): Observable<Trade> {
    const url = `${this.baseUrl}/trades/${tradeId}`; 
    return this.http.get<Trade>(url);
  }

 
}

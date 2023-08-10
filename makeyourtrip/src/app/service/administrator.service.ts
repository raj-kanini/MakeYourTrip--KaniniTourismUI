import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  private baseUrl: string = 'https://localhost:7023/api'; // Your API base URL

  constructor(private http: HttpClient) { }

  // Get list of Travel Agents
  getTravelAgents(): Observable<any[]> {
    const url = `${this.baseUrl}/TravelAgent`;
    return this.http.get<any[]>(url); 
  }

  // Set Travel Agent's status to active
  setActiveStatus(id: number,data:any): Observable<any> {
    const url = `${this.baseUrl}/TravelAgent/${id}`;
    return this.http.put<any>(url, data); // Use PUT request to set status
  }

  // Set Travel Agent's status to inactive
  setInactiveStatus(id: number,data:any): Observable<any> {
    const url = `${this.baseUrl}/TravelAgent/${id}`;
    return this.http.put<any>(url, data); // Use PUT request to set status
  }
}

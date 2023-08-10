import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
    private baseUrl: string = 'https://localhost:7023/api'; // Your API base URL
  
    constructor(private http: HttpClient) { }
  
    addTraveler(user: any): Observable<any> {
      const url = `${this.baseUrl}/Traveler`;
      return this.http.post<any>(url, user);
    }
  
    addTravelAgent(user: any): Observable<any> {
      const url = `${this.baseUrl}/TravelAgent`;
      return this.http.post<any>(url, user);
    }
  
    addAdministrator(user: any): Observable<any> {
      const url = `${this.baseUrl}/Admin`;
      return this.http.post<any>(url, user);
    }
  
}


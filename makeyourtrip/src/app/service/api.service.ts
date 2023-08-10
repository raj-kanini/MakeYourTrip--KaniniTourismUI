import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7023'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    const url = `${this.baseUrl}/api/Token`;
    return this.http.post<any>(url, credentials).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  signupAdmin(user: any) {
    const url = `${this.baseUrl}/api/Admin`;
    return this.http.post<any>(url, user);
  }
  signupTraveler(user2: any) {
    const url = `${this.baseUrl}/api/Traveler`;
    return this.http.post<any>(url, user2);
  }
  signupAgent(user3: any) {
    const url = `${this.baseUrl}/api/TravelAgent`;
    return this.http.post<any>(url, user3);
  }

  fetchData(role: string) {
    const url = `${this.baseUrl}/api/${role}`;
    // Include authorization header with JWT token
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any[]>(url, { headers });
  }
 
    loaduser() {
      const t = localStorage.getItem('jwtUserToken');
      const uinfo = t != null ? this.jwtHelperService.decodeToken(t) : null;
      console.log('Decoded Token:', uinfo);
    }
  jwtHelperService = new JwtHelperService();
  getRoleFromToken(token: string): string {
    // Parse token and extract user role
    // You can customize this based on how your token is structured
    const decodedToken = this.jwtHelperService.decodeToken(token);
    return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
  getRoleAndApprovalFromToken(token: string): { role: string, isApproved: string } {
    // Parse token and extract user role and isapproved
    // You can customize this based on how your token is structured
    const decodedToken = this.jwtHelperService.decodeToken(token);
  
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    const isApproved = decodedToken['IsApproved']; // Assuming isapproved is a string
  
    return { role, isApproved };
  }
  
  getToken(){
    localStorage.getItem('token');
  }

  // Helper function to parse JWT token
  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }

  getTravelerIdFromToken(token: string): number | null {
    const decodedToken = this.parseJwt(token);
    return decodedToken && decodedToken.travelerId ? decodedToken.travelerId : null;
  }

  updateTravelerDetails(travelerId: number, updatedDetails: any) {
    const url = `${this.baseUrl}/api/Traveler/${travelerId}`;
    // You can adjust the API call and headers as needed
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<any>(url, updatedDetails, { headers }).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

}
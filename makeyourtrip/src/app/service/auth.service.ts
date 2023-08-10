import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http:HttpClient) { }
  // login(data:any):Observable<any>{
  //   let dataurl='https://localhost:7023/api/Token'
  //   return this.http.post<any>(dataurl,data)
  // }

  constructor(private http: HttpClient, private router:Router) { }

  login(data: any): Observable<any> {
    const dataurl = 'https://localhost:7023/api/Token';
    return this.http.post<any>(dataurl, data);
  }

  isTravelAgentApproved(travelAgentId: number): Observable<boolean> {
    const dataurl = `https://localhost:7203/api/TravelAgent/${travelAgentId}`;
    return this.http.get<any>(dataurl).pipe(
      map(travelAgent => travelAgent && travelAgent.isApproved === 'approved')
    );
  }

  logout() {
    
    sessionStorage.removeItem('token');
    this.router.navigate(['home']);
  }

  
}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class HandleserviceService {
  
  constructor(private jwtHelper: JwtHelperService) {}

  getUserRoleFromToken(): string | null {
    const token = localStorage.getItem('token'); // Replace with your token storage method
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.role;
    }
    return null;
  }
}

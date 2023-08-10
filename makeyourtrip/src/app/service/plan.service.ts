// services/plan.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../model/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private baseUrl: string = 'https://localhost:7023/api/TravelDetails';

  constructor(private http: HttpClient) { }

  addPlan(plan: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post<any>(url, plan);
  }
}

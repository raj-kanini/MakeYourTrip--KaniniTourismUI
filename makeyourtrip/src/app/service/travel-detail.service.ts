import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelDetailService {

  constructor(private http:HttpClient) { }
  getAllPlan():Observable<any>{
    let dataurl="https://localhost:7023/api/TravelDetails"
    return this.http.get<any>(dataurl)
  }
}

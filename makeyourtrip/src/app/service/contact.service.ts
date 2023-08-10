import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  
  addContact(contact:any):Observable<any>{
    let dataurl = 'https://localhost:7203/api/Contact'
    return this.http.post<any>(dataurl,contact)
   }
}

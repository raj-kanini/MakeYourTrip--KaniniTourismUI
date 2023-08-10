// image-gallery.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {
  constructor(private http:HttpClient){}
  dataurl='https://localhost:7023/api/Image'
  getAllImages():Observable<any>{
    return this.http.get<any>(this.dataurl)
  }
  addImage(data:any):Observable<any>{
    return this.http.post<any>(this.dataurl,data)
  }
  
}

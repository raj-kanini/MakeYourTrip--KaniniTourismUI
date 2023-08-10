import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl: string = 'https://localhost:7023/api/feedback';

  constructor(private http: HttpClient) { }

  getFeedbackData(): Observable<any> {
    const url = 'https://localhost:7023/api/feedback';
    return this.http.get<any>(url);
  }

  // Simulate adding feedback data to the API (replace with your actual API endpoint)
  postFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, feedback);
  }
}

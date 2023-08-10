import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service'; // Import the FeedbackService
import { Feedback } from '../model/feedback.model'; // Import the Feedback model

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
   

    constructor(private feedbackService: FeedbackService) { }
    feedback: any = {
      userId: 0,
      tripId: 0, 
      feedbackText: '',
       rating: 1 
     };
  
    ngOnInit(): void {
    }
  
    submitFeedback() {
      this.feedbackService.postFeedback(this.feedback).subscribe(
        response => {
          console.log('Feedback data posted successfully:', response);
        },
        error => {
          console.error('Error posting feedback data:', error);
        }
      );
    }
  }


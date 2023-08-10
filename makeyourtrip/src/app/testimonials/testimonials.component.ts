
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  constructor(private service:FeedbackService){}
  feedback:any[]=[]
  ngOnInit(): void {
      this.service.getFeedbackData().subscribe((data)=>{
        this.feedback=data
      })
  }
  

}


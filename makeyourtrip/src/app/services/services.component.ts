import { Component, OnInit } from '@angular/core';
import { TravelDetailService } from '../service/travel-detail.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  travelPlans:any[]=[]
  constructor(private service:TravelDetailService){}
  ngOnInit(): void {
    this.service.getAllPlan().subscribe((data)=>{
      this.travelPlans=data
    },((err)=>{
      console.log(err)
    }))
      
  }

}

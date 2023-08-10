// components/plan/plan.component.ts
import { Component } from '@angular/core';
import { Plan } from '../model/plan';
import { PlanService } from '../service/plan.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  plan: Plan = {
    planTitle: '',
    planDescription: '',
    planImage: '',
  };

  constructor(private planService: PlanService, private authService: AuthService) { }

  submitPlan() {
    // Call the service method to post the plan data to the API
    this.planService.addPlan(this.plan).subscribe(
      response => {
        console.log('Plan added successfully:', response);
        // Clear the form after successful submission
        this.plan = {
          planTitle: "",
          planDescription: "",
          planImage: "",
          planPrice: 0,
          agentId: 0,
        };
      },
      error => {
        console.error('Error adding plan:', error);
      }
    );
  }

  logout() {
    this.authService.logout(); // Call the logout method from AuthService
  }
}

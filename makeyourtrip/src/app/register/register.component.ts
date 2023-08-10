import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {
    userName: '',
    password: ''

  };  
  
  selectedRole: string = 'traveler';

  constructor(private registerService: RegisterService,private router:Router) { }

  registerUser() {

     // Add the 'IsApproved' property with value 'notApproved'
     this.user.IsApproved = 'notApproved';

    if (this.selectedRole === 'traveler') {
      this.registerService.addTraveler(this.user).subscribe(
        response => {
          console.log('Traveler registered:', response);
          // Reset form or navigate to a different page
          this.router.navigateByUrl('/signup');
          alert("success");

          this.resetForm();
        },
        error => {
          console.error('Error registering traveler:', error);
        }
      );
    } else if (this.selectedRole === 'travelAgent') {
      this.registerService.addTravelAgent(this.user).subscribe(
        response => {
          console.log('Travel Agent registered:', response);
          this.router.navigateByUrl('/signup');
          alert("success");
          // Reset form or navigate to a different page
          this.resetForm();
        },
        error => {
          console.error('Error registering travel agent:', error);
          // Handle error (display error message, etc.)
        }
      );
    } else if (this.selectedRole === 'administrator') {
      this.registerService.addAdministrator(this.user).subscribe(
        response => {
          console.log('Administrator registered:', response);
          alert("success");

          this.router.navigateByUrl('/signup');

          // Reset form or navigate to a different page
          this.resetForm();
        },
        error => {
          console.error('Error registering administrator:', error);
          // Handle error (display error message, etc.)
        }
      );
    }
  }

  resetForm() {
    this.user = {
      userName: '',
    };
    this.user.password = '';
    this.selectedRole = 'traveler';
  }

  ngOnInit(): void {
      
  }

}

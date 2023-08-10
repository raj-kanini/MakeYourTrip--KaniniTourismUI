import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private service:AuthService, private apiservice:ApiService, private router:Router){}
  logindata:any={
    userName:'',
    password:''
  }
  // login(){
  //   this.service.login(this.logindata).subscribe((data)=>{
  //    console.log(data.token)
  //   })
  // }
  
  login() {
    this.service.login(this.logindata).subscribe(
      (data) => {
        console.log("this is token",data);
        const { role, isApproved } = this.apiservice.getRoleAndApprovalFromToken(data.token);
        localStorage.setItem('token',data.token)
        sessionStorage.setItem('jwt token',data.token);
        console.log('Role:', role);
        console.log('Is Approved:', isApproved); 

        
        if (role === 'Administrator') {
          this.router.navigate(['admininstrator']);
        } else if (role === 'Traveler') {
          this.router.navigate(['traveler']);
        } else if (role === 'TravelAgent') {
          this.router.navigate(['travel-agent']);
        } 
      },
      (error) => {
        console.error('Login error:', error);
        // Provide meaningful feedback to the user
        if (error.status === 401) {
          // Unauthorized (invalid credentials)
          window.alert('Invalid credentials. Please try again.');
        } else {
          window.alert('An error occurred. Please try again later.');
        }
      },
      
    );
  }
  ngOnInit(): void {}

 
}

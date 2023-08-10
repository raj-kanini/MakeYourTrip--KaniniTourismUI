import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../service/administrator.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit{

  travelAgents: any[] = [] // Initialize with actual data or fetch from API

  constructor(private administratorService: AdministratorService,  private authService: AuthService) { }

  setActiveStatus(travelAgentId: number) {
    let data={
      isApproved: "approved",
    }
    this.administratorService.setActiveStatus(travelAgentId,data).subscribe(
      response => {
        console.log('Travel Agent status set to active:', response);
        // Refresh the list of Travel Agents or update status locally
        this.refreshTravelAgents();
      },
      error => {
        console.error('Error setting Travel Agent status to active:', error);
        // Handle error (display error message, etc.)
      }
    );
  }

  setInactiveStatus(travelAgentId: number) {
    let data={
      isApproved: "notApproved",
    }
    this.administratorService.setInactiveStatus(travelAgentId,data).subscribe(
      response => {
        console.log('Travel Agent status set to inactive:', response);
        // Refresh the list of Travel Agents or update status locally
        this.refreshTravelAgents();
      },
      error => {
        console.error('Error setting Travel Agent status to inactive:', error);
        // Handle error (display error message, etc.)
      }
    );
  }

  ngOnInit(): void {
    // Fetch list of Travel Agents on component initialization
    this.fetchTravelAgents();
  }

  fetchTravelAgents() {
    // Fetch list of Travel Agents from API using your service
    this.administratorService.getTravelAgents().subscribe(
      response => {
        this.travelAgents = response;
      },
      error => {
        console.error('Error fetching Travel Agents:', error);
        // Handle error (display error message, etc.)
      }
    );
  }

  refreshTravelAgents() {
    // Refresh the list of Travel Agents after status update
    this.fetchTravelAgents();
  }
  
  logout() {
    this.authService.logout(); // Call the logout method from AuthService
  }
}

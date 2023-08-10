import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';  
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactformComponent } from './contactform/contactform.component';
import { RegisterComponent } from './register/register.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DestinationComponent } from './destination/destination.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PlanComponent } from './plan/plan.component';
import { TradeComponent } from './trade/trade.component';
import { TravelerComponent } from './traveler/traveler.component';
import { TravelAgentComponent } from './travel-agent/travel-agent.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AuthGuard } from './authguard/auth.guard';


const routes: Routes = [
  {path : 'services', component : ServicesComponent},
  {path : 'home', component : HomeComponent},
  { path: 'trade', component: TradeComponent,canActivate:[AuthGuard], data: {expectedRoles:['TravelAgent']} },
  {path : 'signup', component : SignupComponent},
  { path: 'contact', component: ContactformComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'testimonial', component: TestimonialsComponent},
  { path: 'destination', component: DestinationComponent },
  { path: 'admininstrator', component: AdministratorComponent },
  { path: 'feedback', component: FeedbackComponent,canActivate:[AuthGuard], data: {expectedRoles: ['Traveler']} },
  { path: 'plan', component: PlanComponent ,canActivate:[AuthGuard]},
  { path: 'trade', component: TradeComponent,canActivate:[AuthGuard] },
  { path: 'traveler', component: TravelerComponent },
  { path: 'travel-agent', component: TravelAgentComponent },
  { path: 'gallery', component: ImageGalleryComponent,canActivate:[AuthGuard],data: { expectedRoles: ['Administrator'] } }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

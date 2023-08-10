import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ServicesComponent } from './services/services.component';
import { OffersComponent } from './offers/offers.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { ContactformComponent } from './contactform/contactform.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DestinationComponent } from './destination/destination.component';
import { TravelerComponent } from './traveler/traveler.component';
import { TravelAgentComponent } from './travel-agent/travel-agent.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PlanComponent } from './plan/plan.component';
import { TradeComponent } from './trade/trade.component';
import { PlanCardComponent } from './plan-card/plan-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    ServicesComponent,
    OffersComponent,
    SignupComponent,
    RegisterComponent,
    ContactformComponent,
    TestimonialsComponent,
    FeedbackComponent,
    DestinationComponent,
    TravelerComponent,
    TravelAgentComponent,
    AdministratorComponent,
    ImageGalleryComponent,
    PlanComponent,
    TradeComponent,
    PlanCardComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

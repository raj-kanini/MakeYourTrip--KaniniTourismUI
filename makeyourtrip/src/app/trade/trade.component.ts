// components/trade/trade.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Trade } from '../model/trade';
import { TradeService } from '../service/trade.service';
import {jsPDF} from 'jspdf'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent {
  @ViewChild ('content',{static:false}) el!:ElementRef
  constructor(private service:TradeService,  private authService: AuthService ){}
  trade: any = {
    tradeId: 0,
    totalprice: '',
    bookingName: '',
    bookingDate: new Date(),
  };
  makepdf(){
    let pdf=new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("booking.pdf")
      }
    })
  }
  bookPackage(){
    this.service.createTrade(this.trade).subscribe((data)=>{
      console.log(data)
      this.makepdf()
    },(err)=>{
      console.log(err)
    })

  }
  logout() {
    this.authService.logout(); 
  }
}

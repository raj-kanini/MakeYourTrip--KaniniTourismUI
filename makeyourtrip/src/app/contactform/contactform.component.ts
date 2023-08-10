import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  constructor(private service:ContactService){}
  addContact:any={
    name:'',
    email:'',
    message:''
  }
  addContactt(){
    this.service.addContact(this.addContact).subscribe((data)=>{
     console.log(data)
    })
  }
  ngOnInit(): void {} 

}

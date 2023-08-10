import { Component, OnInit } from '@angular/core';
import { ImageGalleryService } from '../service/image-gallery.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  constructor(private service:ImageGalleryService){}
  images:any[]=[]
  ngOnInit(): void {
    this.service.getAllImages().subscribe((data)=>{
      this.images=data
    },((err)=>{
      console.log(err)
    }))
      
  }

}

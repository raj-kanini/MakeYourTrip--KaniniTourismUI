// image-gallery.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageGalleryService } from '../service/image-gallery.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  constructor(private service:ImageGalleryService){}
  imgData:any={
    locationName:"",
    imageUrl:""

  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.imgData.imageUrl = base64String;
      console.log(this.imgData)
    }
    fileReader.readAsArrayBuffer(file);
  }
  submitData(){
    this.service.addImage(this.imgData).subscribe((data)=>{
      console.log(this.imgData)
    },((err)=>{
      console.log(err)
    }))

  }
}

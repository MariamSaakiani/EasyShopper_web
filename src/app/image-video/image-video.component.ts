import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-image-video',
  templateUrl: './image-video.component.html',
  styleUrls: ['./image-video.component.css']
})
export class ImageVideoComponent implements OnInit {

  constructor(public service: GeneralService) { }

  ngOnInit(): void {
  }

  Images: string[] = ['assets/Images/process1.png', 'assets/Images/process3.png', 
                      'assets/Images/process4.png', 'assets/Images/process5.png'];

  ImageClicked: string = '';
  openImage(image: string){
    this.ImageClicked = image;
    this.service.showImageDialog = true;
  }
}

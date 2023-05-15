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

  Images: string[] = ['assets/Images/1.png',  'assets/Images/4.png',
                      'assets/Images/5.png', 
                      'assets/Images/7.png', 'assets/Images/8.png',
                      'assets/Images/9.png','assets/Images/2.png', 
                      'assets/Images/6.png', 'assets/Images/3.png',
                      'assets/Images/13.png', 'assets/Images/18.png', 
                      'assets/Images/100.png', 'assets/Images/14.png', 
                      'assets/Images/15.png', 'assets/Images/16.png',
                      'assets/Images/12.png','assets/Images/23.png', 
                      'assets/Images/19.png', 'assets/Images/20.png',
                      'assets/Images/21.png', 'assets/Images/22.png', 
                      'assets/Images/process1.png', 'assets/Images/process3.png', 
                      'assets/Images/process4.png', ];

  ImageClicked: string = '';
  openImage(image: string){
    this.ImageClicked = image;
    this.service.showImageDialog = true;
  }
}

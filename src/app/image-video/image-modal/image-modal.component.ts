import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  constructor(public service: GeneralService) { }

  ngOnInit(): void {
  }
  
  @Input() ImageInfo: string = '';

  close() {
    this.service.showImageDialog = false;
  }

}

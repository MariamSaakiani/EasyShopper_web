import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentName: string = 'main';

  OnBtnClick(componentNm: string){
    this.componentName = componentNm;
  }
}

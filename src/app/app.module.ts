import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupMembersComponent } from './group-members/group-members.component';
import { MainComponent } from './main/main.component';
import { ProjectIdeaComponent } from './project-idea/project-idea.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ImageVideoComponent } from './image-video/image-video.component';
import { FinalProjectComponent } from './final-project/final-project.component';
import { MemberComponent } from './group-members/member/member.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ImageModalComponent } from './image-video/image-modal/image-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupMembersComponent,
    MainComponent,
    ProjectIdeaComponent,
    ProjectDetailsComponent,
    ImageVideoComponent,
    FinalProjectComponent,
    MemberComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

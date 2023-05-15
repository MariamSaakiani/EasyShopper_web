import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMembersComponent } from './group-members/group-members.component';
import { MainComponent } from './main/main.component';
import { ProjectIdeaComponent } from './project-idea/project-idea.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ImageVideoComponent } from './image-video/image-video.component';
import { FinalProjectComponent } from './final-project/final-project.component';

const routes: Routes = [
  { path: 'group-members', component: GroupMembersComponent },
  { path: 'main', component: MainComponent },
  { path: 'project-idea', component: ProjectIdeaComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'image-video', component: ImageVideoComponent },
  { path: 'final-project', component: FinalProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ListCoursesComponent} from './list-courses/list-courses.component';
import {HomeComponent} from './home/home.component';
import { SinglecoursepageComponent } from './singlecoursepage/singlecoursepage.component';
import {StudentregistrationComponent} from './studentregistration/studentregistration.component';
import {TrainerregistrationComponent} from './trainerregistration/trainerregistration.component';
import {WorkshopsComponent} from './workshops/workshops.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {TermsconditionsComponent} from './termsconditions/termsconditions.component';
const routes: Routes = [
  {path: '' ,redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'ListCourses', component:ListCoursesComponent},
  {path: 'singleCourse/:courseName', component:SinglecoursepageComponent},
  {path: 'studentRegister', component:StudentregistrationComponent},
  {path: 'TrainerRegister', component:TrainerregistrationComponent},
  {path: 'workshops', component:WorkshopsComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'termsconditions', component:TermsconditionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

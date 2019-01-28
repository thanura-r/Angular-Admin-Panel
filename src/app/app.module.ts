import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PapersComponent } from './papers/papers.component';
import { ExtrasComponent } from './extras/extras.component';
import { LecturersComponent } from './lecturers/lecturers.component';
import { GradesViewComponent } from './grades-view/grades-view.component';
import {FormsModule} from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GradesComponent,
    SubjectsComponent,
    LessonsComponent,
    ActivitiesComponent,
    PapersComponent,
    ExtrasComponent,
    LecturersComponent,
    GradesViewComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradesComponent} from './grades/grades.component';
import { ActivitiesComponent} from './activities/activities.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ExtrasComponent} from './extras/extras.component';
import { LecturersComponent} from './lecturers/lecturers.component';
import { LessonsComponent} from './lessons/lessons.component';
import { PapersComponent} from './papers/papers.component';
import { SubjectsComponent} from './subjects/subjects.component';
import { GradesViewComponent} from './grades-view/grades-view.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: 'grades',
    component: GradesComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'extras',
    component: ExtrasComponent
  },
  {
    path: 'lecturers',
    component: LecturersComponent
  },
  {
    path: 'lessons',
    component: LessonsComponent
  },
  {
    path: 'papers',
    component: PapersComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'gradesView',
    component: GradesViewComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

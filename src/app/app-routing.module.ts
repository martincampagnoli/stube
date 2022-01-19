import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningListComponent } from './components/learning-list/learning-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'users', component: UserListComponent },
  { path: 'learnings', component: LearningListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

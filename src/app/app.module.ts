import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LearningListComponent } from './components/learning-list/learning-list.component';
import { MainComponent } from './components/main/main.component';
import { MatCardModule } from '@angular/material/card';

const mat = [
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LearningListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...mat
  ],
  exports: [ ...mat ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

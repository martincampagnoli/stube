import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LearningListComponent } from './components/learning-list/learning-list.component';
import { MainComponent } from './components/main/main.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ListComponent } from './components/list/list.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { CreateLearningFormComponent } from './components/create-learning-form/create-learning-form.component';
import { DisplayLearningsComponent } from './components/display-learnings/display-learnings.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const mat = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatPaginatorModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatChipsModule,
  MatSnackBarModule
];

const firebaseConfig = {
  apiKey: "AIzaSyAa_45DztHO0cemyoECFbBe_Bm_WGS6vV0",
  authDomain: "stube-2d651.firebaseapp.com",
  databaseURL: 'https://stube-2d651-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "stube-2d651",
  storageBucket: "stube-2d651.appspot.com",
  messagingSenderId: "40376188203",
  appId: "1:40376188203:web:808d89da57f2e2fc6b596e"
};

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LearningListComponent,
    MainComponent,
    SearchFilterPipe,
    ListComponent,
    CreateUserFormComponent,
    CreateLearningFormComponent,
    DisplayLearningsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
    ...mat
  ],
  exports: [ ...mat ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

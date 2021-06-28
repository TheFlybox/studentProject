import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from "./environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    StudentModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

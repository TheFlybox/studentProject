import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { StudentRoutingModule } from './student-routing.module';

import { StudentService } from '../services/student.service';
//import { StudentCard } from './student-card/student-card.component';

@NgModule({
  imports:      [ FormsModule, ReactiveFormsModule, StudentRoutingModule, BrowserModule,  CommonModule, RouterModule ],
  declarations: [  ],
  providers: [ StudentService ],
  exports: [ StudentRoutingModule ]
})
export class StudentModule { }
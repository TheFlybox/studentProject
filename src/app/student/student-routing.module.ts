import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentReportsComponent } from './student-reports/student-reports.component';
import { StudentForm } from './student-form/student-form.component';
import { StudentCard } from './student-card/student-card.component';
import { StudentUploadComponent } from './student-upload/student-upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch : 'full'},
  { path: 'students', children: [
    {
      path: '', component: StudentListComponent
    },
    {
      path: 'create', children: [
        {
          path: '', component: StudentForm
        },
        {
          path: 'upload', component: StudentUploadComponent
        }
      ]
    },
    {
      path: 'edit', component: StudentForm
    }
  ] },
  { path: 'reports', component: StudentReportsComponent },
  { path:'**', redirectTo: 'students' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [StudentListComponent, StudentReportsComponent, StudentCard, StudentForm],
  exports: [RouterModule, StudentCard]
})
export class StudentRoutingModule { }
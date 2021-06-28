import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'student-reports',
  templateUrl: './student-reports.component.html',
  styleUrls: [ './student-reports.component.css' ]
})
export class StudentReportsComponent implements OnInit {
  public males = 0
  public females = 0
  public bio = 0
  public total = 0

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
    this.count();
  }

  count(){
    this.studentService.getAllStudents().forEach(x => {
      x.map(p => {
        if(p.sex === "Male") this.males +=1;
        else if(p.sex === "Female") this.females +=1;
        if(p.biography){
          if(p.biography.name !== null) this.bio +=1;
        }
      })
      this.total = x.length;
    })
  }
}
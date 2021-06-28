import { Component, OnInit, HostListener } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: [ './student-list.component.css' ]
})
export class StudentListComponent implements OnInit{
  constructor(private studentService: StudentService){}
  public studentList: Observable<Student[]> = new Observable<Student[]>();
  public togglers = new Array<number>();

  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents();
    this.studentList.forEach(x => x.forEach(a => this.togglers.push(0)));
  }

  filteredList(keyword: string){
    this.studentList = this.studentService.getAllStudents()
    .pipe(
      map(x => x.filter(p => p.firstname.toLowerCase().includes(keyword.toLowerCase())))
    );
  }

  changeEverything(e: any){
    this.filteredList(e.target.value);
  }
}
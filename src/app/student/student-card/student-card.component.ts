import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'student-card',
  templateUrl: './student-card.component.html',
  styleUrls: [ './student-card.component.css' ]
})
export class StudentCard implements OnInit{
  @Input() student!: Student;
  @Input() index!: number;
  @Input() togglers!: Array<number>;
  public fileURL: string = '';
  public fileName: string = '';
  public deleteModal = false;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    if(this.student.biography !== undefined && this.student.biography !== null){
      console.log(this.student.biography)
      this.fileURL = this.student.biography.url;
      this.fileName = this.student.biography.name;
    }
  }

  toggleDropdown(pos: number){
    console.log(pos)
    if(this.togglers[pos] === 0) this.togglers[pos] = 1;
    else this.togglers[pos] = 0;
  }

  clearTogglers(){
    this.togglers = this.togglers.map(x => 0);
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent): void {
    let el = (event.target as Element).classList;
    if(!el.contains("toggler")){
      this.clearTogglers();
    }
  }

  deleteStudent(){
    this.studentService.deleteStudent(this.student);
    this.clearTogglers();
    this.toggleDeleteModal();
  }

  checkBio(){ 
    let res = false;   
    if(!this.student.biography) res = true;
    else{
      if(!this.student.biography.name) res = true;
    }   
    return res;
  }

  goToLink(url: string){
    fetch(url)
    .then( res => res.blob() )
    .then( blob => {
      var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.setAttribute("download", this.fileName);
        a.click();
    });
  }

  toggleDeleteModal(){
    this.deleteModal = !this.deleteModal;
  }
}
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: [ './student-form.component.css' ]
})
export class StudentForm implements OnInit{
  public isCreate = true;
  private student_edit: Student;
  public ageArray: Array<number> = [];
  public form: FormGroup;
  public fileNameToUpload = "Empty";
  public file: File;
  public formTitle: string = "Create a student";
  public processCompleted = true;

  constructor(private studentService: StudentService, private location : Location){}

  ngOnInit(): void {
    this.ageArray.push(...Array.from({length: 99}, (_, i) => i + 1));
    this.isCreate = (this.location.getState() as any).isCreate || false;
    let item = (this.location.getState() as any).student as Student;
    if(!this.isCreate){
      console.log("LOL")
      this.student_edit = this.mapStudent(item);
      if(!item.biography){
        item.biography = {url: '', name: ''}
      }
      this.fileNameToUpload = item.biography.name || '';
      this.formTitle = "Edit a student";
    }else{
      item = {
        firstname: '',
        lastname: '',
        sex: '',
        age: ''
      } as Student;
    }

    this.form = new FormGroup({        
      firstname: new FormControl(item.firstname || ''),
      lastname: new FormControl(item.lastname || ''),
      sex: new FormControl(item.sex || 'Select'), 
      age: new FormControl(item.age || 'Select'),
      biography: new FormControl({})
    });
  }

  mapStudent(source: Student){
    let one = new Student();
    one.id = source.id;
    one.date = source.date;
    one.biography = source.biography;
    console.log(one)
    return one;
  }

  onSubmit(){
    this.processCompleted = false;
    setTimeout(()=>{
      this.processCompleted = true;
      this.goBack();
    }, 3000)
    let student = this.form.value as Student;
    let f = this.file;
    student.biography.file = f || null;
    if(f && !this.isCreate){
      let del = '';
      if(this.student_edit.biography){
        del = this.student_edit.biography.name;
        this.studentService.deleteFile(del);
      }
    }
    if(this.isCreate){
      this.studentService.createStudent(student);
    }else{
      student.id = this.student_edit.id;
      student.date = this.student_edit.date;
      //student.biography = this.student_edit.biography;
      console.log(student)
      this.studentService.updateStudent(student);
    }
  }

  changeFileName(e: Event){
    console.log(1)
    const element = e.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.fileNameToUpload = fileList[0].name;
      this.file = fileList[0];
    }
  }

  goBack(){
    this.location.back();
  }
}
import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Location } from '@angular/common';
import { Student } from '../../models/student.model';
import * as xml2js from 'xml2js';

@Component({
  selector: 'student-upload',
  templateUrl: './student-upload.component.html',
  styleUrls: [ './student-upload.component.css' ]
})
export class StudentUploadComponent  {
  public fileNameToUpload = "Empty";
  public file: File;

  constructor(private studentService: StudentService, private location : Location) {}

  changeFileName(e: Event){
    console.log(1)
    const element = e.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.fileNameToUpload = fileList[0].name;
      this.file = fileList[0];
    }
  }

  readFile(file: File){
    let reader = new FileReader();
    let context = this;
    reader.readAsText(file);
    reader.onload = function() {
      context.parseXML(reader.result);
    };
  }

  parseXML(data: string | any){
    let parser = xml2js.parseString;
    let fullData = new Array<Student>();
    parser(data, function (err, result) {
      let res = result.students.student as any[];
      res.forEach(el => {
        let item = new Student();
        item.firstname = el.name[0];
        item.lastname = el.lastname[0];
        item.age = el.age[0];
        item.sex = '';
        fullData.push(item);
      });
    });
    this.studentService.bulkInsert(fullData).then(x => {
      console.log("READY NOW");
    });
  }

  onSubmit(){
    if(this.file){
      this.readFile(this.file);
    }
  }

  goBack(){
    this.location.back();
  }
}
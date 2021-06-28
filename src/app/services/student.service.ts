import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Student } from '../models/student.model';
import { Observable, from, pipe } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private COLLECTION = 'students';
  private UPLOADS_BASE = 'uploads';

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage, private http: HttpClient) { }

  getAllStudents(){
    return this.firestore.collection<Student>(this.COLLECTION).valueChanges();
  }

  createStudent(student: Student){
    let id = this.firestore.createId();
    student.id = id;
    student.date = new Date().toLocaleDateString();
    let file = student.biography.file;
    student.biography.file = null;
    this.firestore.collection(this.COLLECTION).doc(id).set(student).then(x => {
      this.createFile(file, student);
    });
  }

  createFile(file: File, student: Student){
    let path = `${this.UPLOADS_BASE}/${file.name}`;
    const storageRef = this.storage.ref(path);
    const uploadTask = this.storage.upload(path, file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          this.saveFileURL(file.name, downloadURL, student);
        });
      })
    ).subscribe();
  }

  saveFileURL(name: string, url: string, student: Student){
    student.biography.url = url;
    student.biography.name = name;
    this.firestore.collection(this.COLLECTION).doc(student.id).set(student);
  }

  deleteFile(fileName: string){
    const storageRef = this.storage.ref(this.UPLOADS_BASE);
    storageRef.child(fileName).delete();
  }

  deleteStudent(student: Student){
    if(student.biography){
      if(student.biography.name){
        this.deleteFile(student.biography.name);
      }
    }    
    this.firestore.collection(this.COLLECTION).doc(student.id).delete();
  }

  updateStudent(student: Student){
    let file = student.biography.file;
    if(!file){
      student.biography = null;
      this.firestore.collection(this.COLLECTION).doc(student.id).set(student);
    }else{
      student.biography.file = null;
      this.createFile(file, student);
    }
  }

  download(url: string): Observable<Blob> {
    console.log(url)
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

  bulkInsert(students: Student[]){
    let batch = this.firestore.firestore.batch();
    students.forEach((s) => {
      let doc = this.firestore.collection(this.COLLECTION).doc().ref;
      s.id = doc.id;
      batch.set(doc, {id: s.id, firstname: s.firstname, lastname: s.lastname, age: s.age, sex: s.sex, date: new Date().toLocaleDateString()});
    });
    return batch.commit();
  }

}
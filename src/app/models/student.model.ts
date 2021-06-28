export class Student{
  id: string;
  firstname: string;
  name?: string;
  lastname: string;
  age: string;
  sex: string;
  date: string;
  image?: string;
  biography?: {
    name?: string
    url?: string
    file?: File
  }
}
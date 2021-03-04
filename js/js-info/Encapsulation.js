class Student{
Constructor(){let name, marks;}  // data variable
getName(){return this.name}
setName(name){this.name = name}
getMarks(){return this.marks}
setMarks(marks){this.marks = marks}
}
let stud = new Student();  //Object of class (nvoking default constructor)
stud.setName('Animesh'); 
stud.getName();
stud.setMarks(10);
stud.setMarks();
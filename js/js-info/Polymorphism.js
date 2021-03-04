class Shape {
  draw() {
    return "I am shape";
  }
}
class Square extends Shape {
  draw() {
    return "I am square";
  }
}
class Circle extends Shape {
  draw() {
    return "I am circle";
  }
}
let s = new Shape();
s.draw();
let s = new Square();
s.draw();

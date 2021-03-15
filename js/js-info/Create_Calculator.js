function Calculator(){
    this.read = function(){
     this.a = +prompt("Enter first value", 0);
     this.b = +prompt("Enter second value", 0);
    };
    this.sum = function(){
        return this.a + this.b;
    };
    this.mult = function(){
        return this.a * this.b
        };
}

var calculator = new Calculator();
calculator.read();
alert (calculator.sum());
alert (calculator.mult());
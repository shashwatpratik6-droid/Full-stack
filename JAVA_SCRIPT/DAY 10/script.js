function sayHello() {
    console.log("Hello!");
}
const greet = sayHello;
console.log(greet);
greet();


function add(a, b) {
    console.log("inside add function")
return a + b;
}
function multiply(a, b) {
console.log("Inside multiply function")
return a * b;
}
function calculate(a, b, operation) {
console.log("Inside calculate function")
return operation(a, b);
}
console.log(calculate(4, 5, add));
console.log(calculate(4, 5, multiply));
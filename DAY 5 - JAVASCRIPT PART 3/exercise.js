function mathOperation(num1, num2, callback) {
    return callback(num1, num2);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
  
console.log(`Sum = ${mathOperation(5, 3, add)}}`); 
console.log(`Difference = ${mathOperation(5, 3, subtract)}}`); 
console.log(`Product = ${mathOperation(5, 3, multiply)}}`);
console.log(`Quotient = ${mathOperation(5, 3, divide)}}`); 
  

var x = 10; // Outer variable

function exampleFunction() {
  var x = 20; // Inner variable with the same name as the outer variable
  console.log(x); // Outputs: 20
}

exampleFunction();

console.log(x); // Outputs: 20 (Inner variable affects the outer variable)

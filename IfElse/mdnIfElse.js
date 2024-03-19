// // Imagine you are making decisions based on different conditions. 
// // You can use "if" statements to do this. However, 
// // sometimes you have more than two options. 
// // That's where "else if" comes in handy.


// let temperature=10;

// if(temperature>20){
//     console.log("Such A Sunny Day")
// }
// else if (temperature >15 && temperature <=20) {
//     console.log("It is a windy Day");
// }
// else{ 
//     console.log("Normal Day")
// }

// // The "else if" allows you to check different conditions one by one. The code inside the first true condition block is executed, and the rest is skipped. It's like making a decision tree based on various situations.
// // correct syntax to write else if is--------------------------------------->

// if (condition1)
//   statement1
// else
//   if (condition2)
//     statement2
//   else
//     if (condition3)
//       statement3
// // …

// 3} MDN : To execute multiple statements within a clause, use a block statement ({ /* ... */ }) to group those statements.

// Creating a Boolean object with a value of false
let falseBooleanObject = new Boolean(false);

// Checking the truthiness of the Boolean object in a condition
if (falseBooleanObject) {
  // This block will be executed if the condition is true
  console.log("Truthy! This block will be executed.");
} else {
  // This block will be executed if the condition is false
  console.log("Falsy! This block will not be executed.");
}

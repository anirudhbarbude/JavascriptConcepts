// Question 12 ( Implementing Push Operation At First )

let arr3 =[0,1,2,3];
let arr4=[];
arr4[0]=50;
 for(let i=0; i<arr3.length; i++){
    arr4[i+1]=arr3[i];                           // As our first element is 50 hence 
 }
console.log(arr4);



// Question 12 b ( Implementing Push Operation At Last )


let arr5=[2,3,4,4,5,6]

arr5[arr5.length]=34;    // Here   [ arr5.length ] = 6 so we are passing it as a value & it will add new element to 6 Th position in Array
console.log(arr5)


//   Incresing Array Length To see Empty Items

let arr6=[10,20,40,67]

arr6.length=10;
console.log(arr6)



let arr7 =[0,1,2,3];
let arr8=[];
 for(let i=0; i<arr3.length-1; i++){
    arr8[i]=arr7[i+1];                           // Removing Fisrt Element In Array (Also called unshift method of array)
 }
console.log(arr8);


// Question 3 HOISTING 

var a = 10;

function player (){
console.log("Javascript is fun")
   
}

player()
console.log(a)
console.log(player)

 
// Question 6    Array Destructing : Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a concise and expressive way

// Example array
const colors = ["red", "green", "blue"];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: "red"
console.log(secondColor); // Output: "green"
console.log(thirdColor);  // Output: "blue"

//Skipping Elements:
const numbers = [1, 2, 3, 4, 5];

// Skip the second and fourth elements
const [firstNum, , thirdNum, , fifthNum] = numbers;

console.log(firstNum, thirdNum, fifthNum); // Output: 1 3 5


// // Swap values using array destructuring


let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // Output: 2 1


// returning function as an array 


function getCoordinates() {
   return [10, 20];
 }
 
 const [x, y] = getCoordinates();
 
 console.log(x, y); // Output: 10 20

 


 // Question 7 : Array Methods 


 // push()

 const ani = ["anirudh", "shri", "bar"];


ani.push("pune");

console.log(ani); // ---> end me aega



// pop()


const numbers2 = [1, 2, 3, 4, 5];

const removedNumber = numbers2.pop();

console.log(removedNumber); // Output: 5
console.log(numbers2);       // Output: [1, 2, 3, 4]

// map()


const numbers3 = [1, 2, 3, 4, 5];

const squareoffinalelement = numbers3.map(num => num * num);

console.log(squareoffinalelement); // Output: [1, 4, 9, 16, 25]


// filter()

const numbers4 = [1, 2, 3, 4, 5];

// Create a new array with only even numbers
const evenNumbers = numbers4.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]





// index of ()

const fruits2 = ["apple", "orange", "banana", "grape"];

const index = fruits2.indexOf("banana");

console.log(index); // Output: 2




// Question : 8 


let person = {
   firstName: "Anirudh",
   lastName: "Barbude",
   age: 24,
   address: {
     street: "baner",
     city: "pune",
    zipCode: "12345"
   },
 hobbies: ["reading", "coding", "traveling"],
  greet: function() {
     console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
   }
 };
 
 // Accessing properties of the object
 console.log(person.firstName);  
 console.log(person.age);        
 console.log(person.address.city);
 console.log(person.hobbies[1]);  
 
 person.greet(); // 

 



 // Question 10 : CLOSURE


 function outerfuction(){

   var player="Anirudh"

   function innerfunction(){
       console.log(player);
   }
   return innerfunction;


}
let result  = outerfuction();

result();


// Question 11 : Push Operation In Array using inbuit method

// Original array
var fruits5 = ["apple", "orange", "banana"];

fruits5.push("grape");

console.log(fruits5); 


//    Push Operation In Array without using inbuit method




 //Question 14 : Sort without inbuilt method


 let b1=[80,6,2,1,88,90]


for(let i=0;i<b1.length-1;i++)
for(let j=i+1;j<b1.length;j++)
{

    if (b1[j]<b1[i])
    {
        temp=b1[j]
        b1[j]=b1[i]
        b1[i]=temp
    }
}

console.log(b1)



// Question 15 : Reversing Array 


let originalArray = [1, 2, 3, 4, 5, 5, 9];

let reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
reversedArray.push(originalArray[i]);
}

console.log( reversedArray);  // --------------> prints ulta array



// Questioin 16 : Reversing The String 


let str11 = "Ani";

let reverse = "";

for (let i = str11.length - 1; i >= 0; i--) {
  reverse += str11[i];
}

console.log( reverse);




// Q 17





// Q18   Armstrong Number 


let armstrong=153;





 // Q19

 // Lottery operation with three chances
var luckyNumber = 7;
var chances = 3;

for (let i = 1; i <= chances; i++) {
  let userGuess = parseInt(prompt("Guess  (between 1 and 10)"));

  if (userGuess === luckyNumber) {
    console.log("Congrats bhai");
    break;
  } else {
    console.log("Try luck " + (chances - i));
  }
}

console.log("Thanks for playing!");




// Q 20



let isValidName;
let namethatwillbegivenbytheuser;

while (isValidName !== true) {
  namethatwillbegivenbytheuser = prompt("Enter your name (should start with an uppercase letter):");

  isValidName = /^[A-Z][a-zA-Z]*$/.test(namethatwillbegivenbytheuser);

  if (isValidName !== true) {
    alert("Invalid name. Please try again.");
  }
}

let isValidPassword;
let passwordthatwillbegivenbyuser;

while (isValidPassword !== true) {
  password = prompt("Enter your password (should have a special character, a number, and at least one uppercase letter):");

  isValidPassword = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/.test(passwordthatwillbegivenbyuser);

  if (isValidPassword !== true) {
    alert("Invalid password. Please try again.");
  }
}

console.log("Name:", namethatwillbegivenbytheuser);
console.log("Password:",passwordthatwillbegivenbyuser);

// 


// Q22


let str = "AnirudhBarbude";
let wordwehavetoremove = prompt("Enter a character to remove from the string:");

let temp = "";

for (let i = 0; i < str.length; i++) {
if (str[i] !== wordwehavetoremove) {
temp += str[i];
}
}


console.log("Modified String:", temp);

// multiple characters from an astring


// Q24

// Explicit Coersion 


var numString = "123";
var num = Number(numString); // Explicitly converting string to number



// Implicit Coersion 

var numString = "123";
var result2 = numString + 5; // JavaScript implicitly coerces numString to a number for the addition operation



// push without any method 

const array1 = [1, 2, 3];
const array2 = [4, 5];

let indexx = 0;

// Finding the end of array1
while (array1[index] !== undefined) {
    indexx++;
}

// Adding elements from array2 to the end of array1
for (let i = 0; array2[i] !== undefined; i++) {
    array1[indexx + i] = array2[i];
}

console.log(array1);


// push without push () method



const arr1 = [1, 2, 3];
const arr2 = [4, 5];

for (let i = 0; i < arr2.length; i++) {
    array1[array1.length] = arr2[i];
}

console.log(arr1);


// pop () without using pop method 


const myArray = [1, 2, 3, 4, 5];

// Iterate from the second element to the second-to-last element
for (let i = 1; i < myArray.length - 1; i++) {
    // You can perform operations on myArray[i] here if needed
}

// Update the array length to remove the last element
myArray.length = myArray.length - 1;

console.log(myArray);





// splice without using inbulit functions

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15];
let newArray = [];
let position = 2;
let numberOfElementsToDelete = 5;
let elementstoadd = [2,3];

for (let i = 0; i < array.length; i++) {
if ( i<position  || i >= position + numberOfElementsToDelete) {
   newArray.push(array[i]);
    

} else if (i === position) {
    // newArray = newArray.concat(elementstoadd);
    for(j=0;j<elementstoadd.length;j++){
    newArray.push(elementstoadd[j])
    }
}
}
console.log(newArray);


//// slice without method

let arr33=[1,2,3,4,5,6]
let parameter1=2;
let parameter2=5;
let arr4=[];

for(let a =parameter1;a<parameter2;a++){
    arr4.push(arr33[a])

}
console.log(arr4)


// slice method

let arr44=[1,2,3,4,5,6,7,8]
let aa=arr44.slice(2,5)
console.log(aa)



















 



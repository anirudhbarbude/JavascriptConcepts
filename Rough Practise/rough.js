// let a =10;

// function shadowing(){
//     let a=100;
//     console.log(a)
// }

// console.log(a)
// shadowing()




// var a=100;


// function shadowing(){
//     var a=10000;
//     console.log(a);
// }

// shadowing();

// console.log(a);



// var x = 10; // Outer variable

// function exampleFunction() {
//   var x = 20; // Inner variable with the same name as the outer variable
//   console.log(x); // Outputs: 20
// }

// exampleFunction();

// console.log(x); // Outputs: 20 (Inner variable affects the outer variable)


// let arr3 = new Array (1,2,3,4,5)
// console.log(arr3)


// let z=arr3.toString();
// console.log(z)

// let myArray = [1, 2, 3, 4, 5];
// let arrayAsString = myArray.toString();

// console.log(arrayAsString); // Outputs: "1,2,3,4,5"


// let str1=new String("anirudh")
// console.log(str1)


// let z2 = Array.from(str1).join("")
// console.log(z2)


// let array4=[1,2,3,4,5,6]
// let z3=array4.toString();
// console.log(z3)


// let str="Anirudh"
// let z4=Array.from(str);
// console.log(z4)



// var str = "AnirudhBarbude";
// var charToRemove = prompt("Enter a character to remove from the string:");

// var temp = "";

// for (var i = 0; i < str.length; i++) {
//   if (str[i] !== charToRemove) {
//     temp += str[i];
//   }
// }

// console.log("Modified String:", temp);


// var isValidName;
// var name;

// while (isValidName !== true) {
//   name = prompt("Enter your name (should start with an uppercase letter):");

//   isValidName = /^[A-Z][a-zA-Z]*$/.test(name);

//   if (isValidName !== true) {
//     alert("Invalid name. Please try again.");
//   }
// }

// var isValidPassword;
// var password;

// while (isValidPassword !== true) {
//   password = prompt("Enter your password (should have a special character, a number, and at least one uppercase letter):");

//   isValidPassword = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/.test(password);

//   if (isValidPassword !== true) {
//     alert("Invalid password. Please try again.");
//   }
// }

// console.log("Name:", name);
// console.log("Password:", password);



// let Armstrongvar  = parseInt( prompt( " Enter A number Any Mumber We Will Check if it is Armstrong Or Not "))




// function ArmStrongNumber(number) {




// }

// var userInputArray = [];

// var numberOfElements = parseInt(prompt("Enter the number of elements:"));

// for (var i = 0; i < numberOfElements; i++) {
//   var userInput = prompt("Enter element " + (i + 1) + ":");


//   userInput = parseFloat(userInput);

//   userInputArray[i] = userInput;
// }

// console.log("User Input Array:", userInputArray);


// let b1=[80,6,2,1,88,90]


// for(let i=0;i<b1.length-1;i++)
// for(let j=i+1;j<b1.length;j++)
// {

//     if (b1[j]<b1[i])
//     {
//         temp=b1[j]
//         b1[j]=b1[i]
//         b1[i]=temp
//     }
// }

// console.log(b1)




// let str11 = "Ani";

// let reverse = "";

// for (let i = str11.length - 1; i >= 0; i--) {
//   reverse += str11[i];
// }

// // console.log( reverse);   //// have to check why we use [] here in string operations whereas [ ] are used to acess array 



// var luckyNumber = 7;
// var chances = 3;

// for (let i = 1; i <= chances; i++) {
//   let userGuess = parseInt(prompt("Guess  (between 1 and 10)"));

//   if (userGuess === luckyNumber) {
//     console.log("Congrats bhai");
//     break;
//   } else {
//     console.log("Try luck " + (chances - i));
//   }
// }

// console.log("Thanks for playing!");

// let str = "AnirudhBarbude";
// let wordwehavetoremove = prompt("Enter a character to remove from the string:");

// let temp = "";

// for (let i = 0; i < str.length; i++) {
// if (str[i] !== wordwehavetoremove) {
// temp += str[i];
// }
// }

// console.log("Modified String:", temp);



// let str="anirudhbaebude"
// let digit=prompt("enter the digit please")
// let str2="";

// for(let i =0;i<str.length;i++){

//     if (str[i]!==digit){
//     str2+=str[i]

//     }
// }
// console.log(`The modified string is ${str2}`);

// let a = prompt("Let rhis be name")

// function numberSum(n){
//     let sum=0;

//     for(let a=0;a<n;a++){

//         sum+=a;
//         console.log(sum)


//     }

// }

// numberSum(6);


// let add=0;

// for(let i=0;i<3;i++){

//     let number = parseInt(prompt("This is number 1"))

//     add+=number;

// }

// console.log (`the sum of all numbers are ${add}`)


// let luckynumber=6;
// attempts=3;

// for (let a =0; a<attempts;a++){
//     let userNumber=parseInt(prompt("Guess the lucky number"));


//   if (userNumber===luckynumber){
//     console.log("10 Crode");
//     break;
//     }else{ 
//         console.log("try again" , (attempts-a));
            
//     }    

//   }

//   console.log("sorry")

//   var luckyNumber = 7;
// var chances = 3;

// for (let i = 1; i <= chances; i++) {
//   let userGuess = parseInt(prompt("Guess  (between 1 and 10)"));

//   if (userGuess === luckyNumber) {
//     console.log("Congrats bhai");
//     break;
//   } else {
//     console.log("Try luck " + (chances - i));
//   }
// }

// console.log("Thanks for playing!");



// let string = "anirudhbarbude";
// let str="";

// for (let i=string.length-1;i>0;i--){
//     str+=string[i];
// }

// console.log(str)


// let score=parseInt(prompt("Enter Your Score "))


// if (score <=35 ){
//     console.log("Fail Ho Bhai")
// }
// else if (score>36 && score <45 ) {
//     console.log("Pass But Not Good Enough")
// }
// else if (score>=45 ) {
//     console.log("Excellent Work! Keep it Up!")
// }










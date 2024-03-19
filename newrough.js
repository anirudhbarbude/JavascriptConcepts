
// // using method 

// let array=[1,2,3,4,5];
// console.log(array.splice(2,1,1))



// // without using method

// function start(a){


    


// }
// function deleteitem(b){

// }



// let array2 =[1,2,3,4,5]
// let temp=[]

// for(i=0;i<array2.length;i++) {

//     temp+=array2;




// }



// let array1=[1,2,3];
// let array2=[4,5,6];

// let a =array1.concat(array2);
// console.log(a)


// // without


// let array11=[1,2,3];
// let array22=[4,5,6];
// let array3=[...array11,...array22]


// for(let i=0; i<6; i++){
//     array3[i]=array11[i]+array22[i];

// }

// console.log(array3)


// const numbers = [1, 2, 3, 4, 5];
// const removed = numbers.splice(1, 2); // Remove 2 elements starting from index 1

// console.log(numbers); // Output: [1, 4, 5]
// console.log(removed); // Output: [2, 3]

// console.log(array3)


// let array=[1,2,3,4,5];
// let result =array.splice(2,1,1);
// console.log(array);


// function splice(x,y,z){

//     let ask=prompt("2 variable or 3 variable")

//     if (ask==2){


//         let x=prompt("Enter the position from where you have to delete ")
//     let y=promt("Enter the Number You Have To Delete ")



//     }

//     let x=prompt("Enter the position from where you have to delete ")
//     let y=promt("Enter the Number You Have To Delete ")
//     let z=prompt("Enter The Elements You Want To Add")

//     if (x,y,z);
//     {

//     }
        


// }


// function splice(x,y,z){
//     let x=2;
//     let y=1;
//     let z=1;
//     let array=[1,2,3,4,5];

    
// }


// let array = [1, 2, 3, 4, 5];
// let position ; 
// let numberofelementstodelete;
// let valuetobeadded ;


// function splice(position,numberofelementstodelete,valuetobeadded){

//     let newArray = [];
//  if (valuetobeadded != true) {

// for (let i = 0; i < array.length; i++) {
//     if (i !== position) {
//         newArray.push(array[i]);
//     }
// }
 

//  else {

    
//             newArray.push(array[valuetobeadded]);
//         }
//     }



// return(newArray);
// }
// console.log(splice(0,2,1));



// function method of splice 


// function customsplice(position, numberOfElementsToDelete) {



    
//  let array=[1,2,3,4,5,6,7,8,9]
//  let newArray = [];

// for (let i = position; i < numberOfElementsToDelete; i++) {

//   newArray.push(array[i]);


//  }
//  return newArray;
// }

// customsplice(0,3)


// function customsplice(position, numberOfElementsToDelete) {
//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let newArray = [];

//     for (let i = position; i < position + numberOfElementsToDelete; i++) {
//         newArray.push(array[i]);
//     }

//     return newArray;
// }




// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArray = [];
// position=0;
// numberOfElementsToDelete=3;

// for (let i = 0; i < array.length; i++) {


//     if (array[i]!==position) {
//     newArray.push(array[i]);
//     }
// }

// console.log(newArray)


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15];
// let newArray = [];
// let position = 2;
// let numberOfElementsToDelete = 5;
// let elementstoadd = [2];

// for (let i = 0; i < array.length; i++) {
// if ( i<position  || i >= position + numberOfElementsToDelete) {
//    newArray.push(array[i]);
    

// } else if (i === position) {
//     // newArray = newArray.concat(elementstoadd);
//     for(j=0;j<elementstoadd.length;j++){
//     newArray.push(elementstoadd[j])
//     }
// }
// }
// console.log(newArray);


// //// slice without method

// let arr3=[1,2,3,4,5,6]
// let parameter1=2;
// let parameter2=5;
// let arr4=[];

// for(let a =parameter1;a<parameter2;a++){
//     arr4.push(arr3[a])

// }
// console.log(arr4)


// // slice method

// let arr44=[1,2,3,4,5,6,7,8]
// let aa=arr44.slice(2,5)
// console.log(aa)


// let b=[80,6,2,1,88,90]


// for(let i=0;i<b.length-1;i++)
// for(let j=i+1;j<b.length;j++)
// {

//     if (b[j]<b[i])
//     {
//         temp=b[j]
//         b[j]=b[i]
//         b[i]=temp
//     }
// }

// console.log(b)

// const originalArray = [12, 23, 45, 56];
// const newArray = [];

// for (let i = 0; i < originalArray.length; i++) {
//   const reversedNumber = parseInt(originalArray[i].toString().split('').reverse().join(''));
//   newArray.push(reversedNumber);
// }

// console.log(newArray);



// function isPalindrome(word) {
//     // Convert the word to lowercase to make the comparison case-insensitive
//     const lowercasedWord = word.toLowerCase();
  
//     // Remove non-alphanumeric characters from the word
//     const cleanedWord = lowercasedWord.replace(/[^a-z0-9]/g, '');
  
//     // Reverse the cleaned word
//     const reversedWord = cleanedWord.split('').reverse().join('');
  
//     // Check if the cleaned word is the same as its reverse
//     return cleanedWord === reversedWord;
//   }
  
//   // Test the function
//   const testWord = "radar";
//   console.log(isPalindrome(testWord)); // Outputs: true
  







 
//  }


//     return newArray;

// }
// splicex(0, 2,0);





// bookArr=[
//     {id:1001,name:"history",instock:8},
//     {id:1002,name:"history2",instock:2},
//     {id:1003,name:"history3",instock:6},
//     {id:1004,name:"history4",instock:2},

// ]

// // let arraymapped= bookArr.map((x)=>x.instock+1)
// // console.log(arraymapped)

// let arraymapped2 = bookArr.map((x)=>{
//    return x.instock+1 ;

// });
//  console.log(arraymapped2)


// let bookArr = [
//     { id: 1001, name: "history", instock: 8 },
//     { id: 1002, name: "history2", instock: 2 },
//     { id: 1003, name: "history3", instock: 6 },
//     { id: 1004, name: "history4", instock: 2 },
// ];

// let incrementedBookArr = bookArr.map((x) => {
//     return   {
//          ...x,
//         instock: x.instock + 1,
//     }
// });

// console.log(incrementedBookArr);


// let arr = [10,20,40,10,1,8,3];
// let valuesAbove20 = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 20) {
//     valuesAbove20.push(arr[i]);
//   }
// }

// console.log(valuesAbove20);


// let arr=[[2,3,4],[5,6,7],[8,9,10]]
// let mappedarray=(arr.map(x)=>{
//     return x
// });


// console.log(mappedarray)







// let string="AnirudhBarbude"
// let string2="a"

// for (let i=0; i<string.length;i++) {
//     if (string[i]!==string2){

//     }


// }

// let string = "AnirudhBarbude";
// let string2 = "a";
// let resultString = "";

// for (let i = 0; i < string.length; i++) {
//     if (string[i] !== string2) {
//         resultString += string[i];
//     }
// }

// console.log(resultString);

// function arrayadd(array,numberofelementstoadd) {

// arr2=[]
//     for (let i=1;i<numberofelementstoadd;i++){
//         arr2+=array[i]+i
    
    
//     }
//     console.log(arr2)
    


// }




// arrayadd([1,2,3,4,5,6],3)



// let number=153;

// if (number%2===0){
//     console.log("the number is even")

// }

// else{
//     console.log("odd")
// }


// let number=4;

// let factorial=1;

// for(let i = 2;i<=number;i++){
//     factorial*=i

// }

// console.log(factorial)


// let number=121;
//  let number2;

// for(let i=number.length-1;i<0;i--){

// number2+=i

// }
// if (number===number2){
//     console.log("palindrome")
// }
// else{console.log("non")}

// let array=[2,8,6,7,2,1];

// console.log(array)


// let array2=array.sort();
// console.log(array2)

// let array3=array.sort((a,b)=> a-b)
// console.log(array3)

// Matrix Problem



// //[1,2,6,7,8]
// //[2,2,6,7,7]
// //[6,6,24,6,6]
// //[7,7,6,2,2]
// //[8,7,6,2,1]

// arr4=[]
// for (let i =0;i<=array3.length-1;i++){
//     if(array3[i]!==i){
//         arr4.push(array3[i])

//     }
// }

// console.log(arr4)


// let reversedarray=arr4.reverse()
// console.log(reversedarray)


// console.log("-----------------------")


// let matrix = Array.from({ length: 5 }, () => Array(5).fill(NaN));

// matrix[0] = [1, 2, 6, 7, 8];

// let secondrowarray=[];
// secondrowarray.push(...matrix[0])

// secondrowarray[0]=2;
// secondrowarray[4]=7;

// let fourthrow=secondrowarray.reverse()





// let newArray = [];

// for (var i = 0; i < arr4.length; i++) {
//   if (i === 2 || i === 4) {
//     newArray.push(arr4[i] * 4);
//   } else {
//     newArray.push(arr4[i]);
//   }
// }



// matrix[4]=reversedarray;
// matrix[1]=secondrowarray;
// matrix[3]=fourthrow;
// matrix[2]=newArray;




// for (let row of matrix) {
//     console.log(row);
// }





// function outerfunction()
// {
//  let name="Anirudh";

//  function innerfunction(){
//   console.log(name)
//  }

// //  return innerfunction
// innerfunction()
// }

// // let result=outerfunction();
// // console.log(result)
// outerfunction()

// 
// function outer() {
//   let a=10;

//   function middle() {
//       let b=20;

//       function inner() {
//           console.log( 'sum is  ', a+b);
//       }

//       return inner;
//   }

//   return middle;
// }

//  let variable1 = outer();
//  let variable2 = variable1();

//  variable2();
 

 
// console.log('Hi!');

// setTimeout(() => {
//     console.log('Execute immediately.');
// }, 67);

// console.log('Bye!');

// var obj = {
//     method: function() {
//       console.log(this);
//     }
//   };
//   obj.method(); // Refers to the object (obj) on which the method is called

// const array = [1, 2, 3, 2, 4, 5, 6, 1];

// const duplicateElements = [];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] !== array[j] ) {
//       duplicateElements.push(array[i]);
//     }
//   }
// }

// console.log("Duplicate Elements:", duplicateElements);



// const array = [1, 2, 3, 2, 4, 5, 4, 5];
// let duplicates = [];

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             // Check if the found duplicate is already in the duplicates array
//             // if (!duplicates.includes(array[i])) {
//                 duplicates.push(array[i]);
//             // }
//         }
//     }
// }

// console.log(duplicates); // Output: [2, 4, 5]

  

// function outer() {
//     var outerVariable = "I'm from outer!";
  
//     function inner() {
//       console.log(outerVariable);
//     }
  
//     return inner; // Return the inner function
//   }
  
  
//   var closureFunction = outer(); // outer has executed, and closureFunction now holds a reference to inner
//   outer();
  

// let array=[1,2,3,4,5]

// let mappedarray=array.map((x)=>(x*2))

// console.log(mappedarray)

// const array = [1, 2, 3, 2, 4, 5, 6, 1];

// const uniqueElements = array.filter((value,index, self) => {
//   return self.indexOf(value) === self.lastIndexOf(value);
// });

// console.log("Unique Elements:", uniqueElements);
// const array = [1, 2, 3, 2, 4, 5, 6, 1];

// const uniqueElements = array.filter((value, index) => {
//   return array.indexOf(value) === array.lastIndexOf(value);
// });

// console.log("Unique Elements:", uniqueElements);



// let reducedarray=array.reduce((sum,x)=> sum+x)
// console.log(reducedarray)


// function inner(){
//     let x=10;

//     function outer(){
//         console.log(x)
//     }
//     return outer;
// }

// let x=inner();
// x()


// let newobject={
//     key:10,
//     key2:Value,
//     z:function(){console.log('Hello World')},


// }

// let arr=[1,2,3,4,5,6,8,8,6,5]
// let number=12;

// for(let i=0; i<arr.length-1; i++){
//     for(let j=i+1; j<arr.length-1; j++){
//         if(arr[i]+arr[j]==number){
//             console.log("The Number Is",arr[i],arr[j])
//         }
//     }
// }



//js function that takes an array  of numbers and returns new array with even number


function arreven (arr){
    let newArr = [];

    for(let i=0;i<arr.length;i++){
        if (arr[i] % 2 == 0 )
        newArr.push(arr[i])
    }

console.log(newArr)

}
let arr=[1,2,3,4,5]

arreven(arr)

console.log("------------------")



//js to calculate factorial


function factorial(num) {
    if  (num === 0  || num === 1) {
        console.log(1)

    }else {
              result=1;
            for(let i=1; i<=num ; i++) {
                result *= i
            }

        }
        
        console.log( result);
}
num=5;
factorial(num);
console.log("---------------");

// js function to check if given number is prime



function prime(num2){
    if (num2%2===0) {
        console.log("Not a prime number")
    }else{(console.log("prime number"))}

}
var num2 = 9999991;
prime(num2);

console.log("---------------");


//find largest element in nested array


function largestelementinnestedarray (nestedarray){

    let normalarray = nestedarray.flat(Infinity);
    let largestelement=normalarray[0];

    for(let i=1;i<normalarray.length;i++){

        if(normalarray[i]>largestelement){
            largestelement=normalarray[i];

        }


    }
    console.log(normalarray)
    console.log(largestelement)

}

nestedarray=[1,3,[5,7]]
largestelementinnestedarray(nestedarray)

console.log("---------------");





//fibonnaci series upto a particular number


//covert a string to capital


function capital(string){
    return string.toUpperCase();

}
console.log(capital("hello world"))

console.log("---------------");



function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  let number = 5;
  let result = factorial(number);
  console.log(`The factorial of ${number} is: ${result}`);

  console.log("---------------");

  


//function that takes 2 sorted arrays and merges them into single sorted array



//function to flatten array

function flatten(arr) {
    let array2 = arr.flat(Infinity);
    console.log(array2);
  }
  
  arr = [1, 2, [2, 3]];
  flatten(arr);
  console.log("---------------");

  


//palindrome function
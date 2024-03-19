// write a code for bubble sort

// given aaray of integers find 2 numbers such that they add up to a specific target

let arr=[1,2,3,4,5,6,8,8,6,5]
let number=12;

for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length-1; j++){
        if(arr[i]+arr[j]==number){
            console.log("The Number Is",arr[i],arr[j])
        }
    }
}




// reverse the digits of integer


let integer = 1234455;//[12,23,45,56] ===>[21,32,54,65]
let result = "";

let integerString = integer.toString();

for (let z = integerString.length - 1; z >= 0; z--) {
    result += integerString[z];
}

console.log("Reversed Number Apna:",result);


//convert roman number to integer


let roman = "XIV";
let resultz = 0;

for (let m = 0; m < roman.length; m++) {
    if (roman[m] == "I") {
        resultz += 1;
    } else if (roman[m] == "V") {
        resultz += 5;
    } else if (roman[m] == "X") {
        resultz += 10;
    } else if (roman[m] == "L") {
        resultz += 50;
    } else if (roman[m] == "C") {
        resultz += 100;
    } else if (roman[m] == "D") {
        resultz += 500;
    } else if (roman[m] == "M") {
        resultz += 1000;
    }
}

console.log(resultz);


// reverse the digits of integer  [12,23,45,56] ===>[21,32,54,65]


// let array3=[12,23,44.56,78];

// let resultarray=[];

// for (let c=0;c>=array3.length;c++){

    
// }


let integers = [12, 23, 45, 56];
let reversedIntegers = [];

for (let i = 0; i < integers.length; i++) {
    let originalInteger = integers[i].toString();
    let reversedInteger = parseInt(originalInteger.split('').reverse().join(''));

    reversedIntegers.push(reversedInteger);
}

console.log(reversedIntegers);





//
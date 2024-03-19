



// 1} at() ------------------> Helps us to acces desired element just put value of element you want to acces in curly btaces .at (-1) . It can take negative values too


array1=[1,2,3,4,5,6,7,8,9,10]

console.log(array1.at(-2))
 

// without method

array4=[1,2,3,4,5]





// 2} concat() -------------------------->  To merge 2 arrays

array2=[1,2,3,4]

array3=[6,7,8,9]

let ani=array3.concat(array2)
console.log(ani) 

// withoout any method 

let ani2=[...array2,...array3];
console.log(ani2)







// 3} constructor()

let array5 = new Array(1,2,3,4)
console.log(array5)





//4} copywithin()


let arr6 = [1, 2, 3, 4, 5];
arr6.copyWithin(0, 3, 5);  //-------> (target index,start index,end index(n-1))
console.log(arr6);  // Output: [4, 5, 3, 4, 5]

// without method


// let target = 0;
// let start = 2;
// let end = 5;

// for (let a = 0; a < arr6.length-1; a++) {
//     if (a >= target && a < target + (end - start + 1)) {
//         arr6[a] = arr6[start + (a - target)];
//     }
// }

// console.log(arr6);  // Output: [3, 4, 5, 3, 4, 5]

let arr = [1, 2, 3, 4, 5];
let target = 0;
let start = 3;
let end = 5;

// Create a new array from position 3 to 4
let subarray = [];
for (let i = start; i <= end; i++) {
    subarray.push(arr[i]);
}

console.log(subarray)

// Add the new array to the target position
let newArr = subarray.concat(arr.slice(target + subarray.length));


console.log(newArr);  // Output: [4, 5, 1, 2, 3, 4, 5]






//entries()

let arr11 = ['apple', 'banana', 'cherry'];

// Create an iterator for the array using entries()
let iterator = arr11.entries();

// Use the iterator to get key-value pairs
for (let entry of iterator) {
    console.log(entry);
}

// Output:
// [0, 'apple']
// [1, 'banana']
// [2, 'cherry']


// without method


let arr12 = ['apple', 'banana', 'cherry'];
let keyValuePairs = [];

for (let i = 0; i < arr12.length; i++) {
    let keyValuePair = [i, arr12[i]];
    keyValuePairs.push(keyValuePair);
}

console.log(keyValuePairs);
// Output: [[0, 'apple'], [1, 'banana'], [2, 'cherry']]

// without method 2


let arr22 = ['apple', 'banana', 'cherry'];

for (let i = 0; i < arr22.length; i++) {
    console.log(`[${i}, '${arr22[i]}']`);
}

// Output:
// [0, 'apple']
// [1, 'banana']
// [2, 'cherry']









//every()


let values = [15, 20, 25, 30];

// Check if all values are greater than 10
let allGreaterThan10 = values.every(function(value) {
    return value > 10;
});

console.log(allGreaterThan10);  // Output: true



// without using function

let values1 = [15, 20, 25, 30];
let allGreaterThan101 = true;

// Check if all values are greater than 10
for (let i = 0; i < values.length; i++) {
    if (values1[i] <= 10) {
        allGreaterThan101 = false;
        break;
    }
}

console.log(allGreaterThan101);  // Output: true





// fill()

let array22 = [1, 2, 3, 4, 5];
array22.fill(0, 2, 4); //--------------------> (value that we have to fill,from,to)  Fill elements from index 2 to 3 (exclusive) with the value 0
console.log(array22)



// withot method

let array222 = [1, 2, 3, 4, 5];
let valueToFill = 0;
let startIndex = 2;
let endIndex = 4;

// Fill elements from index 2 to 3 (exclusive) with the value 0
for (let i = startIndex; i < endIndex; i++) {
    array222[i] = valueToFill;
}

console.log(array222);
// Output: [1, 2, 0, 0, 5]


// filter()


// Example: Filtering an array to get only even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4, 6, 8, 10]

// without using function function

// customFilter(array, condition) ;{
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         // Filtering condition directly within the loop
//         if (condition(array[i], i, array)) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }



//find()

// Example: Using find() with an arrow function
let firstOdd = numbers.find(number => number % 2 !== 0);          // -------------------> Find Only Responds or returns first element satisying condition

console.log(firstOdd);
// Output: 1


// without using function

// Example: Finding the first even number without using find()
let numbers2 = [1, 3, 5, 7, 8, 9, 11];

let firstEven = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        firstEven = numbers2[i];
    
    }
}

console.log(firstEven);
// Output: 8







// findIndex()

// Example: Using findIndex() with an arrow function
let indexFirstOdd = numbers.findIndex(number => number % 2 !== 0);

console.log(indexFirstOdd);
// Output: 0


// without using methods

// Example: Finding the index of the first even number without using findIndex()
let numbers22 = [1, 3, 5, 7, 8, 9, 11];
let indexFirstEven = 0; 

for (let i = 0; i < numbers22.length; i++) {
    if (numbers22[i] % 2 === 0) {
        indexFirstEven = i;
        
    }
}

console.log(indexFirstEven);
// Output: 4


// findLast()



// findLastIndex()

//flat()
let myArr = [[1,2],[3,4],[5,6]]; // Convert nested array to normal array
let mynewArr = myArr.flat();
console.log(mynewArr)

// without using method

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = [];

for (let i = 0; i < nestedArray.length; i++) {
    let currentElement = nestedArray[i];

    if (Array.isArray(currentElement)) {
        flattenedArray = flattenedArray.concat(currentElement);
    
    }
}

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6]


//flatmap()


// The flatMap() method in JavaScript is a combination of the map() and flat() methods. It first maps each element using a mapping function, and then flattens the result into a new array. This method is useful when you want to both transform the elements and flatten the resulting nested arrays.

let squaredAndFlattened = numbers.flatMap(number => [number * number, number * number * number]);
console.log(squaredAndFlattened)



// without using method 


// Example: Using nested loops to square each number and flatten the result
let numbers222 = [1, 2, 3, 4];
let squaredAndFlattened2 = [];

for (let i = 0; i < numbers222.length; i++) {
    let number222 = numbers222[i];
    squaredAndFlattened2.push(number222 * number222, number222 * number222 * number222);
}

console.log(squaredAndFlattened2);
// Output: [1, 1, 4, 8, 9, 27, 16, 64]


//{ }forEach()         ------------> Just like for loop of aarays 

// Example: Using forEach() to log each element in the array
let fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function (fruit) {
    console.log(fruit);
});



// Output:
// apple
// banana
// cherry


//Withot Method :

let fruits2 = ['apple', 'banana', 'cherry'];

for(let z=0;z<fruits2;z++){
    console.log(fruits2[z])
}


//includes()       -------------------> To chrck if particular element is present in that position or not

// Example: Using includes() to check if an array includes a specific element
let numbers3333 = [1, 2, 3, 4, 5];

let isElementIncluded = numbers3333.includes(3);

console.log(isElementIncluded);  // Output: true

// without using method 

function customIncludes(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

let numbers34 = [1, 2, 3, 4, 5];

let isElementIncluded34 = customIncludes(numbers, 3);

console.log(isElementIncluded34);



//join()           ---------------------------> To convert array to string 

// Example: Using join() to join array elements into a string
let fruits34 = ['apple', 'banana', 'cherry'];

let joinedString = fruits34.join('');

console.log(joinedString);
// Output: "apple, banana, cherry"


let fruits90 = ['apple', 'banana', 'cherry'];
let result = '';

for (let i = 0; i < fruits90.length; i++) {
    if (i > 0) {
        result += ' ';     //-----  works as delimiter
    }
    result += fruits90[i];
}

console.log(result);
// Output: "apple, banana, cherry"



//keys()     ------------------->  returns the keys (indices) of an array

let array78=[1,2,3,4,5,6]
let keysiterator=array78.keys()
// console.log(Array.from(keysiterator))   //---> Converting iterator

for(let key of keysiterator){
    console.log(key)
}


// without method

let array88=[1,2,3,4]

for(let x=0;x<array88.length;x++){

    console.log(x)
}

//LastIndexOf() ----------------------> Gibes last index where that element is present


// Example: Using lastIndexOf() to find the index of the last occurrence
let numbers4 = [1, 2, 3, 4, 2, 5, 2];

let lastIndex = numbers4.lastIndexOf(5);

console.log(lastIndex);
console.log("--------------------")

// Output: 5


// without method 
let numbers45 = [1, 2, 3, 4, 2, 5, 2];
let number = 5;
let arr66 = [];

for (let c = numbers45.length - 1; c >= 0; c--) {
    if (number === numbers45[c]) {
        console.log(c);
        break; // Optional: If you only want to find the index of the first occurrence
    }
}

console.log("------------")







//map()



// Example: Using map() to create a new array by squaring each number
let numbers90 = [1, 2, 3, 4];

let squaredNumbers = numbers90.map(function (number90) {
    return number90 * number90;
});

console.log(squaredNumbers);
console.log("-------------")
// Output: [1, 4, 9, 16]


// without using method 

let numbers91 = [1, 2, 3, 4];
let arr67 = [];

for (let h = 0; h < numbers91.length; h++) {
    arr67.push(numbers91[h] * numbers91[h]);
}

console.log(arr67);
console.log("-----------------")
// Output: [1, 4, 9, 16]






//pop()





// push()


// reduce()

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

console.log("----------------")

let sum2 = numbers.reduce((accumulator, currentValue) => accumulator *currentValue, 1);
console.log(sum2)



// reduceRight()

//reverse()

let array98=[6,7,8];
console.log(array98.reverse())
console.log("-------------------")

// without using function 
let array99= [1,2,3]
let arr74=[];
for(let t= array99.length-1; t>=0; t--){
    arr74.push(array99[t]);
}

console.log(arr74);




// shift()--------------------> Removes first element 

let array6782=[1,2,3,4,5]
let adi2=array6782.shift()
console.log(array6782)
console.log("-----------------")

// WITHOUT METHOD 



//slice()

//// slice without method

let arr3=[1,2,3,4,5,6]
let parameter1=2;
let parameter2=5;
let arr4=[];

for(let a =parameter1;a<parameter2;a++){
    arr4.push(arr3[a])

}
console.log(arr4)


// slice method

let arr44=[1,2,3,4,5,6,7,8]
let aa=arr44.slice(2,5)
console.log(aa)



//some()

// The some() method in JavaScript is used to test whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.

let isSomeGreaterThanThree = numbers.some(element => element > 3);
console.log("----------------")
console.log(isSomeGreaterThanThree)
console.log("----------------")



// sort()

//splice()






//toSpliced() |  //toSorted()  | //toReversed() | //toLocaleString()



// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced()




// unsift()    ----------> Add elements at start 

let array678=[1,2,3]
let adi=array678.unshift(2,2)
console.log(array678)
console.log("-----------------")

// without method 






// values() --------------> Norml Iteration (for of loop )


let fruits99 = ['apple', 'banana', 'cherry'];

let valuesIterator = fruits99.values();


for (let value of valuesIterator) {
    console.log(value);
}

// Output:
// 'apple'
// 'banana'
// 'cherry'


//with()


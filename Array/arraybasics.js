let arr= new Array (1,3,4,7,6,5,54);
console.log(arr)


// console.log(arr1[2])

// arr1.push(34);
// console.log(arr1)

// console.log(arr1.push(67));              // mistake



// let arr43= new Array (1,39,4,7,68,5,54);
// console.log(arr43)


// arr43.pop(54);
// console.log(arr43)




// let arr53= new Array (1,39,4,7,68,5,54);
// console.log(arr53.push(88));


arr.unshift(33);
console.log(arr)   // adds number at first position

arr.shift();
console.log(arr)  // removes number at first position 

arr.splice(2,0,100);
console.log(arr)    //adds 100 in the second index and shifts all elements to right

arr.splice(3,3,0);   // adds 0 and deletes 3 elements from postition 3 ( Numbering starts from 0 so position 3 is 4th element)
console.log(arr)


//Array 2

let arr2 = [1,3,4,7,6,5];
console.log(arr2)

console.log(arr2.push(123))

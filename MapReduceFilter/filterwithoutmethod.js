// function findMissingNumber(arr) {
//     let sortedArray = arr;
//     for (let i = 0; i < sortedArray.length; i++) {
//       for (let j = i + 1; j < sortedArray.length; j++) {
//         if (sortedArray[i] > sortedArray[j]) {
//           const temp = sortedArray[i];
//           sortedArray[i] = sortedArray[j];
//           sortedArray[j] = temp;
//         }
//       }
//     }
  
//     let completeArray = [];
//     for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++) {
//       completeArray.push(i);
//     }
  
//     return completeArray;
//   }
  
//   const inputArray = [4,5,7,8,9,0,3];
//   const completeArray = findMissingNumber(inputArray);
  
//   console.log("Complete array:", completeArray);
  
  

// function traverseArrayAndPrint(arr) {
//     if (arr.length === 0) {
//       console.log("Array is empty.");
//       return;
//     }
  
//     let min = arr[0];
//     let max = arr[0];
  
//     // Find the minimum and maximum elements in the array
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       } else if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
  
//     // Create a new array containing all numbers from min to max
//     let resultArray = [];
//     for (let num = min; num <= max; num++) {
//       resultArray.push(num);
//     }
  
//     console.log("Minimum element:", min);
//     console.log("Maximum element:", max);
//     console.log("Complete array from minimum to maximum:", resultArray);
//   }
  
//   // Example usage
//   const inputArray = [3, 2, 6, 4];
//   traverseArrayAndPrint(inputArray);
  


function findPairsWithSum(arr, targetSum) {


  const newarray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        resultPairs.push([arr[i], arr[j]]);
      }
    }
  }

  return newarray;
}

const inputArray = [1,3,4,5,6,7,8,9];
const targetSum = 8;
const pairs = findPairsWithSum(inputArray, targetSum);

console.log("Array:", inputArray);
console.log("Target Sum:", targetSum);
console.log("Pairs with Sum:", pairs,"=",targetSum);

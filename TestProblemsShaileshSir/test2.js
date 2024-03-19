function findPairsWithSum(arr, number) {


    const newarray = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === number) {
          newarray.push([arr[i], arr[j]]);
        }
      }
    }
  
    return newarray;
  }
  
  const inputArray3 = [1,3,4,5,6,7,8,9];
  const number = 8;
  const pairs = findPairsWithSum(inputArray3, number);
  
  console.log("Array:", inputArray3);
  console.log("Target Sum:", number);
  console.log("Pairs with Sum:", pairs,"=",number);
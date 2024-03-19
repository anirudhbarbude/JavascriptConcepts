// function findmissing (array){

//     let arraysort=array;
//     for (let i=0;i<arraysort.length;i++){
//         for (let j=0;i<arraysort.length;j++){
//             if (arraysort[i]>arraysort[j]){
//                 let temporaryvariable=arraysort[i];

//                 arraysort[i]=arraysort[j];
//                 arraysort[j]=temporaryvariable;
//             }
          
//         }
//     }

//     let completeArray = [];
//     for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++) {
//       completeArray.push(i);
//     }
  
//     return completeArray;
//   }

//   findmissing([1,2,4,5])


function traverseArrayAndPrint(arr) {
   
  
    let min = arr[0];
    let max = arr[0];
  
    // for (let i = 1; i < arr.length; i++) {
    //   if (arr[i] < min) {
    //     min = arr[i];
    //   } else if (arr[i] > max) {
    //     max = arr[i];
    //   }
    // }

    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
      }

  
    let newarray = [];
    for (let i= min; i <= max; i++) {
      newarray.push(i);
    }
  
    console.log("Smallest:", min);
    console.log("Largest:", max);
    console.log("finalserult", newarray);
  }
  
  
  let inputArray2 = [3, 2, 6, 4, 10,12];
  traverseArrayAndPrint(inputArray2);
  
  //////////////  number 2



  
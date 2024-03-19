// let arr3 = [80, 6, 2, 1, 88, 11, 3];

// function bubbleSort(arr) {
//     let len = arr.length;

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// arr3 = bubbleSort(arr3);

// console.log(arr3);



let b=[80,6,2,1,88,90]


for(let i=0;i<b.length-1;i++)
for(let j=i+1;j<b.length;j++)
{

    if (b[j]<b[i])
    {
        temp=b[j]
        b[j]=b[i]
        b[i]=temp
    }
}

console.log(b)



















































let arr3 = [80, 6, 2, 1, 88, 11, 3];

function bubbleSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

arr3 = bubbleSort(arr3);

console.log(arr3);


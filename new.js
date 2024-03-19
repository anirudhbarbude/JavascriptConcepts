// let string="anirudhbarbude"
// let result=""
// for (let i=0;i<string.length-1;i++){
//     if(string[i]==="b"){
//         console.log(index(string, "b"))
//     }

// }

// let string = "anirudh barbude";
// let find = "b";


// for (let i = 1; i < string.length - 1; i++) {
//     if (string[i] === find) {
//         console.log(string.indexOf("b"));
//     }
// }
let input = prompt("Enter a string:");
let find = prompt("Enter a character to find:");

for (let i = 0; i < input.length; i++) {
    if (input[i] === find) {
        console.log("Index is ",i);
        break;  
    }
}

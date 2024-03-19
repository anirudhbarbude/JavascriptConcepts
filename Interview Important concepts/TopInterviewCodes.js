// palindrome number  ( A number is called palindrome if it is same from front and back)

let number = 121;
let numberString = number.toString();
let number2 = '';

for (let i = numberString.length - 1; i >= 0; i--) {
    number2 += numberString[i];
}

if (numberString === number2) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}

console.log("-----------------")


// with array 

let number5 = 12154;
let convert = number5.toString().split('');
console.log(convert);

let array=[];

let reversef=convert.reverse()

array=array.push(reversef)

if(convert===array){
    console.log("p")
}
else{ console.log ("np")}

console.log("-----------------")



// Asccii  ()









//Reverse String ( Remember .reverse() is the  method used to reverse array in JS hence cant be applied on strings directly )


// Direct Method .reverse() by converting into array


console.log("-----------------")


let string="Anirdh"

let reverestring=string.split('')      

let newly=reverestring.reverse()
console.log(newly)

let final=newly.join("")
console.log(final)

// Reverse using Pure Logic For Loop  after Array Conversion 


console.log("-----------------")


let string2="Anirudh"

let stringconversiontoarray=string2.split('')
let newarray=[]

for (let i=stringconversiontoarray.length-1;i>=0;i--){

    newarray.push(stringconversiontoarray[i])
    
}

let final2=newarray.join('')

console.log(final2)


//Factorial

console.log("-----------------")



 function factorial(number){
    let variable=1;


    for (let i=number;i>=2;i--){
        variable*=i
    }
    return variable;
 }

 console.log(factorial(5))

//Fibonnaci Sereis

//Check Weather Number is Odd Or Even




// Longest Word In a Sentence  ****
console.log("-------------")


let sentence = "This Is Anirudhhhhhhhhhhhhh Barbudezzzzzz";
let words = sentence.split(' ');
console.log(words);

let maxLengthElement = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > maxLengthElement.length) {
        maxLengthElement = words[i];
    }

}

console.log("Element with maximum length:", maxLengthElement);


console.log("-----------------")




//Prime Number 


function checkPrimeNumber(number){

    if (number%number===0 || number/2===false)
    console.log("prime number")

    else (console.log("Non Prime"))

}

checkPrimeNumber(16)



//Fizbuzz



//Return word by eleminating particular alphabet from string


let string8="AnirudhBarbude"
let finalstring=string8.toLowerCase
let arrayzz=string8.split('')
console.log(arrayzz)
let stringtoeleminate='a'
let newarraz=[]

for(let i=0;i<=arrayzz.length-1;i++){
    if (arrayzz[i]!==stringtoeleminate)
    newarraz.push(arrayzz[i])
    
}
console.log(newarraz)
let finalzz=newarraz.join('')
console.log(finalzz)







// replace  all vovels in string with *

let string99="anirudhaeu"
let string100=""

if (string100=string99.replace(/[aeiou]/g,"*")){
    console.log(string100)
}


// code for max number in array

let array78 = [1, 2, 3, 4, 5, 6, 7, 8];
let maxElement = Math.max(...array78);

console.log(maxElement);

//max without  using inbuilt function
function findMax(arr){
    let arr2=arr[0]
    for(let i =0;i<=arr.length-1;i++)
    {
        if(arr[i]>arr2)
        arr2=arr[i]
    }
    return arr2
}

console.log(findMax([1,2,3]))



// basic array methods



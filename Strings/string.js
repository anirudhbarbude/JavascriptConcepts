// most important

let playerName=new String ("Anirudh");
console.log(playerName)

console.log(playerName.toUpperCase())
console.log(playerName.toLowerCase())


console.log(playerName.split(""))  // seperates alphabets
console.log(playerName.split("  "))  // creatres gap before and after string
console.log(playerName.split("i"))   // removes i and splits word into 2 parts { part 1 : alphabets before i [An] | part 2 : alphabets after i [rudh]}
console.log(playerName.split("ir"))  // Output : [ 'An', 'udh' ]
console.log(playerName.split("An"))  //  Output: [ '', 'irudh' ]



console.log(playerName.substring(1,4))    // Output: [nir] | it prints alphabets from 1 to n-1
console.log(playerName.substring(1,-4)) // Output [A]  | All negative values are treated as 0 and then swapped so this becomes (0,1)


console.log(playerName.slice(1,3))   // normal slice 
console.log(playerName.slice(-5,-1)) // Output: [irud] both are negative start from back
console.log(playerName.slice(3,-1) ) // 3 from front -1 from back







// Less Important

console.log(playerName.length)   // gives us the length of string  [7]
 console.log(playerName[0])     // gives first character of a string [A]
 console.log(playerName.charAt(2))      // gives char at index 2 [i]
 console.log(playerName.indexOf('r'))       // gives position of r in string [3]















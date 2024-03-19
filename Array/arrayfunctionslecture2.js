let desiheroes=["shaktimaan","mogambo","yo","jojo"]
let marvel=["thorbhai","hulk","ironmanbhai"]


let allheroes=[...desiheroes,...marvel] // Spread Operatot it is used to join arrays using ...
console.log((allheroes))


console.log(Array.from("Anirudh"))  // converting string into array


console.log(Array.isArray(allheroes)) //  [= ,./ 'Output:True  checking if someting is array or not it only returns True or False

//Converting Multile Strings Or Numbers Into arrays 

let a="anirudh";
let b="barbude";
let c="array";

console.log(Array.of(a,b,c)) // Output;[ 'anirudh', 'barbude', 'array' ]


let students=['S','h','i','v'];
students.push('a')   //Adding element at last in the array
console.log(students)
students.unshift('A')    // Adding Element At The First Position Of Array
console.log(students)


// Join function

let student=['S','h','i','v'];
student=student.join('_')
console.log(student)

// Split Method

let student3=['S','h','i','v'];
student3=student3.toString()
console.log(typeof(student3))
console.log(student3)
student3=student3.split('')
console.log(student3)






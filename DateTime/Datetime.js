let todaysDate= new Date();
console.log(todaysDate)

let date =  Date();
console.log(date)



console.log(Object.getPrototypeOf(todaysDate))      // Date keeps its protoype hidden in order to acess it we have to use this



// Properties ( Functionalities )

console.log(todaysDate.toDateString());     // Shows only date removes time
console.log(todaysDate.getDay());           // returns the day of week as a number between 0 and 6 where Sunday is
console.log(todaysDate.getDate());
// Conversion To String & Json


console.log(todaysDate.toString());        
console.log(todaysDate.toISOString());
console.log(todaysDate.toJSON());

//Some More Functions Not Frequently Used

console.log(todaysDate.getFullYear());
console.log(todaysDate.getMonth()+1);       // Returns month from 0 to 11 so +1 is used



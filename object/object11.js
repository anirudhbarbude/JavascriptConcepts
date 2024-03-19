
// Creating Our Fist Object


let player = {
    playername:"Anirudh",
    matches:29,
    age:21,
    sport:"Cricket"
}

console.log(player) // ------------------> Returns Object
console.log(player.playername) //---------------> Return Value of the key mentioned . method
console.log(player["playername"]) // --------------------->  Returns Value but this is the prefferd method



// Adding a new Key-Value Pair to our object
player.country="India";

console.log(player)

// Modifying Value Of Key 

player.age=23;
console.log(player)

// Deleting a Key from an Object

delete player.age;
console.log(player)


// Rough Practise


player.cap="white";
console.log(player)

player.matches=2.55;
console.log("The Player "+player.playername+" has played "+player.matches+" Matches")

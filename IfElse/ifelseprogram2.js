





// let name = prompt("Enter your name:");
// console.log("Welcome, " + name + "!");

// let age = parseInt(prompt("Enter your age:"));

// if (age <= 15) {
//   let schoolType = prompt("Which school are you in? (Domestic or International)");
//   if(schoolType.toLocaleLowerCase()==='Domestic')
//   {
//     let marks = parseFloat(prompt("In which state you are in :"));
//      if(marks.toLocaleLowerCase()==='Maharashtra')
//      {
//         console.log(name,age,schoolType);
//      } else  {
//        if (schoolType.toLocaleLowerCase()==='International'){
//         console.log("In which country your scghool is ")
//        }
//      }



//   }
// } else {
//   let collegeLocation = prompt("Which college are you in? (India or Foreign)");

//   if (collegeLocation.toLowerCase() === 'india') {
//     let marks = parseFloat(prompt("Enter your marks percentage:"));

//     if (marks > 60) {
//       console.log("You are eligible for Engineering.");
//     } else {
//       console.log("You are eligible for BSc.");
//     }
//   } else if (collegeLocation.toLowerCase() === 'foreign') {
//     console.log("You are studying in a college abroad.");
//   } else {
//     console.log("Invalid input for college location.");
//   }
// }





let name = prompt("Enter your name:");
console.log("Welcome, " + name + "!");

let age = parseInt(prompt("Enter your age:"));

if (age <= 15) {
  let schoolType = prompt("Which school are you in? (Domestic or International)");

  if (schoolType.toLowerCase() === 'domestic') {
    let state = prompt("In which state is your school? (Maharashtra or Other)");

    if (state.toLowerCase() === 'maharashtra') {
      console.log(name  + age  + schoolType + " school in Maharashtra.");
    } else {
      if (state.toLowerCase() === 'other') {
        console.log(name +  + age  + schoolType + " school outside Maharashtra.");
      } else {
        console.log("Invalid input for state.");
      }
    }
  } else if (schoolType.toLowerCase() === 'international') {
    console.log(name + ", " + age + ", Your school is not in India.");
  } else {
    console.log("Invalid input for school type.");
  }
} else {
  let collegeLocation = prompt("Which college are you in? (India or Foreign)");

  if (collegeLocation.toLowerCase() === 'india') {
    let marks = parseFloat(prompt("Enter your marks percentage:"));

    if (!isNaN(marks)) {
      if (marks > 60) {
        console.log(name + "$$ " + age + ", You are eligible for Engineering.");
      } else if (marks<60){

        let bcs = parseFloat(prompt("You are eligible for BSC & BSC Choose One "));
        if(!isNaN(bcs)){


        console.log(name + "$$ " + age + ", You are eligible for BCS.");
        }else{console.log(name + "$$ " + age +"You are eligible for BSC (Study At Your Own risk)")}
      }
    } else {
      console.log("Invalid input for marks.");
    }
  } else if (collegeLocation.toLowerCase() === 'foreign') {
    let ielts = parseFloat(prompt("Mention your IELTS Score"));
    if (!isNaN(ielts>5)) {console.log("Bhai AAP Eligible HO")}
    else{console.log("Not Eligible (Nhi Ho Paega Tumse)")}
  } else {
    console.log("Invalid input for college location.");
  }
}



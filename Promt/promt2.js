let a = prompt("Enter your age");

if (a === null || isNaN(a)) {
  console.log("Invalid input or cancelled.");
} else {
  let b = Number(a);

  if (b >= 18) {
    console.log("Adult");
  } else {
    console.log("Child");
  }
}

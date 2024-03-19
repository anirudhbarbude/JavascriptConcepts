let string1 = "sa?a??";
let string2 = "sagar";

if (string1.includes('*')) {
  console.log(true);
} else if (string1.length === string2.length && string1 === string2) {
  console.log(true);



} else if (string1.includes('?')) {
let arr1 = string1.split('');
let arr2 = string2.split('');

let index = arr1.indexOf('?');

  if (index < arr2.length - 1) {
let arr1nexttoquestionmark = arr1[index + 1];
let arr2nexttoquestionmark = arr2[index + 1];

let result = arr1nexttoquestionmark === arr2nexttoquestionmark;

    console.log(result);
} else {
    console.log(false);
}





} else {
  console.log(false);
}


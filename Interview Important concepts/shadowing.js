var a=100;
{
    var a=10;
    var a=20;
    let b=20;
    const c=30;
    console.log(a); // output:10 just because it is var . In var the value gets overriden and the last value is printed irrespective of the block{}
    console.log(b);  
    console.log(c);

}
 console.log(a)  







// let b=100;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a); 
//     console.log(b);     // Output wil be 10 when the value is inside the block 
//     console.log(c);

// }
// console.log(b)  // output will be 100 when the print statement is outside the block{} 


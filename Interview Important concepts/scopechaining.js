// function outerFunct(){
//     var a=10;
//     function innerFunc(){
//         console.log(a); // 10
//     }
// }
// outerFunct();



function innerfunction() {
    let d=10;
    outerfunction();

    function outerfunction(){
        console.log(d);

    }
}

innerfunction();


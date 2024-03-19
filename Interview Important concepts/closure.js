// Basically in JS you Can concider closures as : When 




function outerfunction(){
    let picknickItem="Sandwhich"

    function innerfunction() {
        console.log(`I want to eat a ${picknickItem}`)

    }

    return innerfunction()
}

closure = outerfunction()


// In this example, innerFunction (the closure) remembers the picnicItem variable from its environment (inside outerFunction), even after outerFunction has finished running.

let ani=new Array(1,2,3)
console.log(ani)


let abj = {
    key:1,
    key2:2,
}
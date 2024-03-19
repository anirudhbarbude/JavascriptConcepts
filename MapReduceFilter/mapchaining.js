let bookArr = [
    { id: 1001, name: "history", instock: 8 },
    { id: 1002, name: "history2", instock: 2 },
    { id: 1003, name: "history3", instock: 6 },
    { id: 1004, name: "history4", instock: 2 },
];

let arrayMapped1 = bookArr.map((x) => {
    return x.instock + 1;
});

let arrayMapped2 = arrayMapped1.map((y) => {
    return y * 2;
});

console.log(arrayMapped2);




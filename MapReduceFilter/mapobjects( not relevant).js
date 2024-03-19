let map1=new Map();
map1.set("name","zhangsan");
map1.set("age",21)



console.log(map1.get("name"));
console.log(map1)

for (let v of map1){
    console.log(v);
}


for(let key of map1.keys()){
    console.log(key)
}     // to print keys with the help of for of 
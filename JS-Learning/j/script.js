'use strict'

function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}

let counter1 = makeCounter();
console.log("c1: "+ counter1());
console.log("c1: "+ counter1());
console.log("c1: "+ counter1());
console.log("c1: "+ counter1());

let counter2 = makeCounter();
console.log("c2: "+ counter2());
console.log("c2: "+ counter2());
console.log("c2: "+ counter2());
console.log("c2: "+ counter2());



let a = 5;

function change(){
    a = 10;
};

change();

console.log(a);

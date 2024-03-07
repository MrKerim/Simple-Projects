// Writing a Caching function in order to recall the previous calls of the steady CPU heavy functions
function slow(x){
    console.log(`Called with ${x} for the first time`);
    return x;
}

function cachingDecorator(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}


slow = cachingDecorator(slow);
console.log(slow(1));
console.log(slow(1));

//

function sayHi() {
    alert(this.name);
  }
  
  let user = { name: "John" };
  let admin = { name: "Admin" };
  
  // use call to pass different objects as "this"
  sayHi( user ); // Can't see anythin why is that??
  // Bcause since we are not using call method to pass the object as this, it will not work
  sayHi.call( admin ); // Admin 
  // func.call(obj,arg1,ag2,...rest);

  ///

let worker = {
    someMethod() {
        return 1;
    },

    slow(x){
        console.log(`Called with ${x} for the first time`);
        return x * this.someMethod();
    }
};

function cachingDecorator(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)) return cache.get(x);
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    }
}

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2));
console.log(worker.slow(2));

// Binding

let user1 = {
    firstName: "John",
    sayHi(){
        console.log(`Hello, ${this.firstName}`);
    }
};

// if we call it like this

let Ufunc = user1.sayHi;
Ufunc(); // Hello, undefined
// To fix this
let Ufunc1 = user1.sayHi.bind(user1);
Ufunc1(); // Hello, John
//

let aF = (a,b) => a+b;
console.log(aF(1,2));

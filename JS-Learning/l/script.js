//"use strict"
// All object properties has flags:
user = {
    name: "Hans",
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor) );
// { value: "Hans", writable: true, enumerable: true, configurable: true }
// If we want to change them, then we can use Object.defineProperty.
Object.defineProperty(user, "name", {
    writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'

// Here is a new topic to study PROTOTYPES
// By default every object in the JS has a prototype that is either Object.prototype or null

let rabbit = {
    eats : "Veg",
}

let animal = {
    moves : true,
}

rabbit.__proto__ = animal;
//or
let goose = {
    __proto__ : animal,
    eats : "Grass",
}
alert(rabbit.moves); // true
// When JS can't find the property int he object it automaticly looks for it in the prototype

let User = function(name, age, possesion){
    this.name = name;
    this.age = age;
    this.possesion = possesion;
    this.sayHi = function(){
        alert("Hi my name is "+this.name+" and I am "+this.age +" years old.\nI am working on "+this.possesion)
    };
    this.shopping_list = [];
};

let U1 = new User("Kerim",21,"CS");
U1.possesion = "BodyBuilding";
//U1.sayHi();
//alert(U1.shopping_list == "Shopping list:\n    *Milk");



let str = "stringify";
// alert( str.slice(0, 5) );

let code_str = "東".codePointAt(0);
//console.log(`UTF 16 code for :東 is ${code_str}`)

let arr = ["HEy",415,"an array"];
arr[4] = "heysss";
arr.age = 12;
console.log(`Lenght of the array is ${arr.length}`);



console.log(arr.age);

U1.shopping_list.push("Milk","Rope","Chair");

U1.shopping_list.splice(1,2,"Toaster","Bath Tub");

for (let elem of U1.shopping_list){
    console.log(elem);
};
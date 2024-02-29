let Human = function(name, sex, height, weight, age) {
    this.name = name;
    this.sex = sex;
    this.size = {
        height : height,
        weight : weight,
    };
    this.sayHi = function() {
        console.log("Hi my name is "+this.name+" !");
    }
    this.age = age;
}

function marry(man,women){
    man.wife = women;
    women.husband = man;
};


let Ahmad = new Human("Ahmad","M",185,90,22);
let Riza = new Human("Riza","F",158,65,21);

marry(Ahmad,Riza);
console.log("Husband of the "+Riza.name+" is "+Riza.husband.name);


// Classes overwiev
class User {
    constructor(name = "Anonymus"){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}

let user = new User();
user.sayHi(); // Anonymus

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop = () => {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");
  animal.stop();


class Rabbit extends Animal {
    constructor(name, furrColor) {
        super(name);
        this.furrColor = furrColor;
    }
    hide(){
        console.log(`${this.name} hides!`);
    }

    stop(){
        super.stop();
        this.hide();
    }
}
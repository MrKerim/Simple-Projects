class CoffeeMachine {

    #waterLimit = 100;
    _waterAmount = 0;
    
    constructor(power){
        this._power = power;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    set waterAmount(amount){
        console.log("You can't set the water amount directly");
    }

    addWater(amount){
        this._waterAmount += amount;
        if (this._waterAmount > this.#waterLimit){
            this._waterAmount = this.#waterLimit;
        }
        console.log(`Current water amount: ${this._waterAmount}`)

    }

    get power(){
        return this._power;
    }

    makeCoffe(){
        if (this._waterAmount < 30){
            console.log("Not enough woter");
        }
        else if(this._power < 10){
            console.log("Not enough power");
        }
        else{
            console.log("Coffee is ready");
            this._waterAmount -= 30;
            this._power-= 10;
        }
    }


}

let coffmach = new CoffeeMachine(100);
console.log(`Here is the water and power amounts of the coffe machine you just purchased:
Water: ${coffmach.waterAmount}
Power: ${coffmach.power}
`);

coffmach.makeCoffe();
coffmach.addWater(50);
coffmach.makeCoffe();

console.log(`Here is the water and power amounts of the coffe machine:
Water: ${coffmach.waterAmount}
Power: ${coffmach.power}
`);

for(let i = 0;i<10;i++){
    coffmach.addWater(20);
    coffmach.makeCoffe();
}

console.log(coffmach.waterAmount);
coffmach.waterAmount = 100;
console.log(coffmach.waterAmount);
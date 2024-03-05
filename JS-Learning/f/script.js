let User = function(id, name){
    this.id = id;
    this.name = name;
    this.displayUSer = function() {
        console.log(`User id: ${this.id} User name: ${this.name}`)
    }
}

let names = ["Asian","Bitch","Jamal",
            "Alex","Fox","CockSucker",
            "Kaal","Hool","Amcanavarı31",
            "Heyy31",]

let user_array = [];
for (let i=0;i<10;i++){
    let rnd = Math.random();
    let rnd2 = Math.random();
    rnd = Number((rnd*100).toFixed())
    rnd2 = Number((rnd2*9).toFixed());
    user_array.push(new User(rnd,names[rnd2]));
}

for (let item of user_array){
    item.displayUSer();  
};

console.log("displaying user whose id's are less than 30");
let some_users = user_array.filter(item => item.id<30);
for (let item of some_users){
    console.log(`Name of the user : ${item.name}`);
}
if(some_users.length==0) console.log("There are none");

let st = "123456";
let arr2 = st.split("").map(item => Number(item));

for (let elm of arr2){
    console.log(elm);
}

let result = arr2.reduce((accumulater , item) => 2*item + accumulater
,0);

console.log(result);


let str = '𝒳😂𩷶';


console.log( str.slice(1, 3) ); 



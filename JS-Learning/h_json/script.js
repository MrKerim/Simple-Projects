let user = {
    name : "Kerim",
    age: 21,
    place :"Istanbul",
    friends : {
        Apo : "A gun treader",
        Kahloo: "An alcholoic"
    },
    date : new Date(2022,2,10),
}

let JSON_user = JSON.stringify(user);
alert(JSON_user);

let user_fromJSON = JSON.parse(JSON_user,(key,value)=>{
    if(key=="date") {
        return new Date(value);
    }
});
console.log(user.date.getFullYear());
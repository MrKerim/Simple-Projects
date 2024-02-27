//add strict
"use strict";

let getAge = () =>{
    let age = parseInt(prompt("What is your age?","Must be a number"));
    return (age || getAge())
    
}

let checkAge = (age) => {
    return (age >= 18) ? true : confirm("Do you have your parents permission to access this page?");
}

if(checkAge(getAge())) alert("Access granted");
else alert("Access denied");
// Who's there -> Cancell , Other , Admin
// if Admin -> Password? -> Cancel , Other , TheMaster

let user = prompt("Who's there?","");
if(!user) alert("Canceled");
else{
    if(user=="Admin"){
        let password = prompt("Password ?","");
        if(!password) alert("Canceled");
        else{
            if(password=="TheMaster") alert("Welcome!");
            else alert("Wrong password");
        }
    }
    else alert("I don't know you");
}
// Layout of a linked list:
let list = {
    value:5,
    next : {
        value: 10,
        next: null,
    }
}

console.log(list.value);
console.log(list.next.value);

// adding an elemnt:
list = {
    value:25,
    next : list,
}

for (let i = 10;i>0;i--){
    list = {
        value : i,
        next : list,
    }
}


console.log("Writing linked list inside a loop");

temp = list;
while(temp != null){
    console.log(temp.value);
    temp = temp.next;
}
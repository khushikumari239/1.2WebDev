// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user) {
    let title;
    if (user.gender === " Mr." || user.gender === " Mrs." || user.gender === " Ms." || user.gender === " Mx" )
        title = user.gender;
    else {
        title= " Mx ";
    }

    console .log (" hello " + title  + user.name + " your age is "+ user.age);
}


let user = {
    name : "khushiiiii",
    age : 19,
    gender : "Msui"
}


greet(user);
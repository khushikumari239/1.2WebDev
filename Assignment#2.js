// Write a function called canVote that returns true or false if the age of a user is > 18
function canVote (age) {
    if (age>=18){
        // return true;
console.log("adult");
    // } else {
    //     return false
    }
    if (age<18) {
        console.log("Nope");
    }
}

let result = canVote(87);
console.log (result);
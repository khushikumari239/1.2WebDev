// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old


function getAdults (users) {
//    let users = ["khushi" , "raman" , "aura" , "Keshav" , "Bo-Gum" 

let adult = [];
for (let i =0 ; i<users.length ; i++) {
    if (users[i].age > 18) {
        adult.push(users[i]);
    }
}
   return adult;
}
   
   
   
   
   let users = [
    
        { name : "khushi" , age : 19},
        { name : "raman" , age : 14},
        { name : "aura" , age : 31 },
        { name : "Keshav" , age : 9},
        { name : "Bo-Gum" , age : 28}
        
];

   console.log (getAdults(users));



// if (users.age>= 18){ 
//     console.log("Adult");
// }
// else {
//     console.log ("Not Adult");
// }


// for (let i =0 ; i<= users.length ; i++) {
//  console.log (users[i])}
// }

//    console.log ("user", users.name +" Your age is ", users.age);

// }






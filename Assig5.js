// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male


function getAdults(users) {
    let adult = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].gender === "male" && users[i].age > 18) {
            adult.push(users[i]);
        }
    }
    return adult;
}
let users = [

    { name: "khushi", age: 19 , gender: "female" },
    { name: "raman", age: 14 , gender: "male" },
    { name: "aura", age: 31 , gender: "male" },
    { name: "Keshav", age: 9 , gender: "male" },
    { name: "Bo-Gum", age: 28 , gender: "male" }

];

console.log(getAdults(users));










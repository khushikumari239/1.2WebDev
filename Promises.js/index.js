
// 🌹
 
function random (resolve) {    // resolve is a function too 
    // resolve ();
    setTimeout (resolve, 3000);

}

let p = new Promise (random); //Supposed to return me something 
// console.log(p);

// using the promise class OR eventual value returned by the promise
function callBack () {
    console.log("Promiseeeeee");
}
p.then(callBack);




// 🌼
// function waitFor3s (resolve) {
//     setTimeout (resolve, 3000)
// }

// function setTimeoutPromisified () {
//     return new Promise(waitFor3s) ;
// }

// function main() {
//     console.log("main is called")
// }

// setTimeoutPromisified().then(main);


// 🕊️
// function promiseCallback (resolve) {
//     setTimeout (resolve , 3000)
// }


// promiseCallback (function() {
//     console.log ("hello")
// })


// 🌸
// function setTimeoutPromisified (ms) {
//     return new Promise (resolve => setTimeout(resolve,ms));
// }

// function afterdone () {
//     console.log ("3sec passed");
// }

// let p = setTimeoutPromisified (3000);
// console.log(p);
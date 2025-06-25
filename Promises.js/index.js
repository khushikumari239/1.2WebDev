
function promiseCallback (resolve) {
    setTimeout (resolve , 3000)
}


promiseCallback (function() {
    console.log ("hello")
})


// function setTimeoutPromisified (ms) {
//     return new Promise (resolve => setTimeout(resolve,ms));
// }

// function afterdone () {
//     console.log ("3sec passed");
// }

// let p = setTimeoutPromisified (3000);
// console.log(p);
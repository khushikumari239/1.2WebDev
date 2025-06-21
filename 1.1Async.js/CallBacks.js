// Asynchronous code, callbacks

// Let’s look at the code to read from a file asynchronously. Here, we pass in a function as an argument. This function is called a callback since the function gets called back when the file is read 
const fs = require ("fs");
function print (err , data) {
    console.log (data);
}

fs.readFile ("a.txt" , "utf-8" , print);
fs.readFile ("b.txt" , "utf-8" , print);

console.log ("Done!") 
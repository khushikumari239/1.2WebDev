// Write a function called sum that finds the sum from 1 to a number
// 1 + 2 + 3 ....n




function sum (n) {
    
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total +=i;
    }
    return total;

}
let result = sum(5);
console.log(result);
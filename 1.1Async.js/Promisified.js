
//🕊️ Promisified Version of SetTimeout

let promise = new Promise (function( resolve , reject){

    console.log ("heyyy");

   
 setTimeout (() => resolve("whoops!") , 10000);
 console.log("hallo");
});


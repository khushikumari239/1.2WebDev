//  Create promisified fs.readFile, fs.writeFile and cleanFile

// 🕊️ fs.readFile

const fs = require('fs').promises;
fs.readFile('a.txt', 'utf8').then(console.log);

// ------O R ----------🌼

// function fileRead (err, data)
// {

// }

// fs . readFile ("a.txt" , "utf-8") . then (fileRead);




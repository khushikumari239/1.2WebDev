// 1. Callback approach
// In the callback approach, the function signature should look something like this -

function onDone() {
	console.log("file has been cleaned");
}
cleanFile("a.txt", onDone)


// Sol---------------

const fs = require("fs");
function cleanFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    data = data.trim();
    fs.writeFile(filePath, data, function () {
      cb();
    });
  });
}

function onDone() {
  console.log("file has been cleaned");
}
cleanFile("a.txt", onDone);






// 2. Promisified approach
// In the promisified approach, the function signature should look something like this -

async function main() {
   await cleanFile("a.txt")
   console.log("Done cleaning file");
}

main();

// Sol--------------------

const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

async function main() {
  await cleanFile("a.txt");
  console.log("Done cleaning file");
}

main();

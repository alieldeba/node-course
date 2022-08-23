const fs = require("fs");

// reading a file
console.log(fs.readFileSync("./content/read.txt", "utf8"));

// writing an overwritten file
fs.writeFileSync(
  "./content/overwritten.txt",
  "This file is created from file system folder and can be overwritten"
);

// writing a file that adds content and not remove past content
fs.writeFileSync(
  "./content/write.txt",
  "This file is created from file system folder and can not be overwritten ",
  { flag: "a" }
);

/* ----------
 *   async
 * ----------
 */

// reading a file in async formate
fs.readFile("./content/read.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

// reading a file then changing content then reading it again (callback hell) ❌
fs.readFile("./content/read_write_async.txt", "utf8", (err, result) => {
  console.log("--- Reading and writing a file in callback hell ---");
  if (err) {
    console.log(err);
    return;
  }
  console.log("Before : " + result);
  fs.writeFile(
    "./content/read_write_async.txt",
    `${Math.floor(Math.random() * 1000) + 1}`,
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
  fs.readFile("./content/read_write_async.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("After : " + result);
  });
});

// reading a file then changing content then reading it again (without callback hell) ✔
console.log("--- Reading and writing a file without callback hell ---");

console.log("Before : " + fs.readFileSync("./content/read_write.txt", "utf8"));

fs.writeFileSync(
  "./content/read_write.txt",
  `${Math.floor(Math.random() * 1000) + 1}`,
  "utf8"
);

console.log("After : " + fs.readFileSync("./content/read_write.txt", "utf8"));

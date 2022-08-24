const { readFile } = require("fs");

// reading a file in an async formate
function getText(path) {
  return new Promise((reject, resolve) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// first way
getText("./content/read.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// second way
const start = async () => {
  try {
    const result = await getText("./content/read.txt");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

start();

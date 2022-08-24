const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request");
  res.end("Hello, World!");
});

server.listen(8080, () => {
  console.log("Server listening in localhost:8080");
});

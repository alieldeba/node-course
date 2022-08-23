const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the home page");
  } else if (req.url === "/about") {
    res.write("Welcome to about page");
  } else {
    res.write(`
      <h1>404 | Page Not found</h1>
      `);
  }
  res.end();
});

// port in the web
server.listen(6060);

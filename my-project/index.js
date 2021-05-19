const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("hello client 11111");
  })
  .listen(3000);

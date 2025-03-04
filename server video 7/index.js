const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  //console.log(req.headers)
  const log = `${Date.now()}:new rq rec\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("hello from server");
  });
});
myserver.listen(8001, () => console.log("server started"));

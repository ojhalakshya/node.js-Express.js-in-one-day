let http = require("http");

let server = http.createServer(() =>
{
  console.log("I hear you! Now and now!");
})

server.listen(3000);
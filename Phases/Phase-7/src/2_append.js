let fs = require("fs");

fs.readFile("./hello.txt", (err, data) =>
{
  if(err)
  console.log(err);
  console.log("Before appending", data.toString());
});


fs.appendFile("./hello.txt", " ->This is append", err =>
{
  if(err)
  console.log(err);
});

fs.readFile("./hello.txt", (err, data) =>
{
  if(err)
  console.log(err);
  console.log("After appending", data.toString());
});
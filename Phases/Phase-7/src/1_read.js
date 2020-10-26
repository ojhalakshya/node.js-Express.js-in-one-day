let fs = require("fs");

/**
Use toString method to print the data
otherwise the data will be printed in
hexadecimal format.
Also toString uses 'utf8' encodeing for
representing characters.
*/
fs.readFile("./hello.txt", (err, data) =>
{
  if(err)
  {
    console.log("error");
  }
  console.log("Async", data.toString());
});

let file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

/**
When code is executed sync functions stop
the pointer until it finishes, and async
functions dont stop the pointer so the
pointer goes to sync function executes it
and when async is ready to give an error
or a data then async fucntion output
is printed.
*/
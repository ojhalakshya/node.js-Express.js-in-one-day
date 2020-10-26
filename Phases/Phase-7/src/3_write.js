let fs = require("fs");

// Write
/**
This will create a bye.txt file with data = "editing"
in the same folder as the java file.
*/
fs.writeFile("bye.txt", "Our bye.txt", err =>
{
  if(err)
  console.log(err);
});
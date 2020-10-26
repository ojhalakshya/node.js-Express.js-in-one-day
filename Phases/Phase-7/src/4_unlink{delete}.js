let fs = require("fs");

/**
 * Will delete the bye.txt file if present.
 */
fs.unlink("./bye.txt", err =>
{
  if(err)
  console.log(err);
  console.log("Deleting");
});
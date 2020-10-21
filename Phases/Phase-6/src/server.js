let express = require("express");
let app = express();

app.get("/", (req, res) =>
{
  console.log(req.query);
  res.send("Server root location");
});

app.listen(3000);
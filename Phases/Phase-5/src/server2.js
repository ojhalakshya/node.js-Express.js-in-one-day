let express = require("express");
let app = express();

// app.use will not let code run further from it unless
// next(); is used inside it.
app.use((req, res, next) =>
{
  console.log("Use method");
  next();
});

app.get("/", (req, res) =>
{
  res.send("Hello this is get method");
});

app.listen(3000);
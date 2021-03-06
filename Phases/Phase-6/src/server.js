let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// using req.query
app.get("/", (req, res) =>
{
  console.log(req.query);
  res.send("Server root location");
});

// using req.body
app.post("/profile", (req, res) =>
{
  console.log(req.body);
  res.send("Inside profile url");
});

// using req.params
app.get("/testingParams/:id", (req, res) =>
{
  console.log(req.params);
  res.send("Inside testingParams URL");
});

app.listen(3000);
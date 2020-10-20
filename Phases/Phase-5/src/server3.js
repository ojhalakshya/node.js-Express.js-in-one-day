let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) =>
{
  res.send("getting root");
});
app.get("/profile", (req, res) =>
{
  res.send("Getting profile");
});

app.post("/profile", (req, res) =>
{
  console.log(req.body);
  let user =
  {
    firstName: "Lakshya",
    secondName: "Ojha"
  };
  res.send(user);
});

app.listen(3000);
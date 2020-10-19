let express = require("express");

let app = express();

app.get("/", (req, res) =>
{
  let user =
  {
    name: "Lakshya",
    hobby: "Badminton and Cricket"
  }
  res.send(user);
});

app.get("/profile", (req, res) =>
{
  res.send("Getting profile");
});

app.post("/profile", (req, res) =>
{
  let user =
  {
    name: "Lakshya",
    hobby: "Cricket"
  }
  res.send(user);
  res.send("Inside profile directory");
});
app.listen(3000);
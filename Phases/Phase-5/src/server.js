let express = require("express");

let app = express();

app.get("/", (req, res) =>
{
  let user =
  {
    nam: 'sally',
    hobby: 'soccer'
  }
  res.send(user);
  console.log("Server is started");
});
app.listen(3000);
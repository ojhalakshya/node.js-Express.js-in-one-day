# RESTful API

## Request(req) in get method
Refer [here](https://expressjs.com/en/api.html#req) for more information.

> The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.

Some basic req properties.
* `req.query`
* `req.body`
* `req.header`
* `req.params`

#### Using req.query
```js
app.get("/", (req, res) =>
{
  console.log(req.query);
  res.send("Server root location");
});
```
When accessing the `localhost:3000` use this to send a get request from browser to the server.
```
localhost:3000/?name=Lakshya&age=22
```
* `?` means the further string represents a query
* `name=Lakshya` is information to get request `&` means there is yet another information.

The server will receive the requiest in this format.
<p align = "center"><img src = /images/image1.png height = 150></p>

#### Using req.body

Whenever you access the url and send something through the body of the url it is received in the server by `req.body`.

```js
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
```
But for that you need `body-parser`.

```js
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
```
# RESTful API

### Request(req) in get method
Refer [here](https://expressjs.com/en/api.html) for more information.

> The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.

Some basic req properties.
* `req.query`
* `req.body`
* `req.header`
* `req.params`

### Using req.query
```js
app.get("/", (req, res) =>
{
  console.log(req.query);
  res.send("Server root location");
});
```
When accessing the `localhost:3000` use this to send a get request from browser to the server.
```
localhost:3000/?name=Lakshya&ethnicity=Asian
```
* `?` means the further string represents a query
* `name=Lakshya` is information to get request `&` means there is yet another information.

<p align = "center"><img src = image.png></p>
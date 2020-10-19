## Server using express.js

To install express module use the following command.
```shell
npm install express
```

Creating a server from express is very easy compared to node.js counterpart.

To create server use this inside the js file use this command
```javascript
let app = express();
```

Now a server browser whenever will access to `localhost:3000` it will make a get request to the server so we need a get request responder in the `server.js` file.

```js
// "/" is used to specify the directly root.
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
```

And finally we use `listen` to start the server.
```js
// 3000 -> port number for hosting the server
app.listen(3000);
```
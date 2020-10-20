## Server using express.js

> Use express documentation for reference [here](https://expressjs.com/en/api.html).

> To run and individual file useing npm use the following shell command `npm start server2.js` *but* before this in the package.json file change `start: "nodemon"`.

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
// "/" is used to specify the directly root in the url of the website.
// i.e, localhost:3000/profile can be accessed if ther exist a get // // written as app.get("/profile", (req, res) => etc etc)
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

## Install body-parser

It is used to make incoming data readable i.e, compatible with the server.

```shell
npm install body-parser
```
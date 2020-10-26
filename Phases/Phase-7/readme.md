# FS Module

This module is exremely useful when you need to interact with files outside the browser and perform computation or any operation on them.

Using this module you can access the data in them.

## Basic Functionalities

1. Read File:
   * Allows us to read data from a file.
```js
fs.readFile("./hello.txt", (err, data) =>
{
  if(err)
  {
    console.log("error");
  }
  console.log("Async", data.toString());
});
```

2. Append File
   * Appends data to an already existing file.
```js
fs.appendFile("./hello.txt", " ->This is append", err =>
{
  if(err)
  console.log(err);
});
```

3. Write File
   * Creates a file if not already existing otherwise replaces the data on the file.
```js
fs.writeFile("bye.txt", "Our bye.txt", err =>
{
  if(err)
  console.log(err);
});
```

4. Unlink / Delete File
    * Deletes an already existing file.
```js
fs.unlink("./bye.txt", err =>
{
  if(err)
  console.log(err);
  console.log("Deleting");
});
```

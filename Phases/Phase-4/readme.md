# Types of Modules
1. fs module
2. http module

## Nodemon tool package

* nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

 * nodemon uses package.json file to store relevant metadata for the project.

 * In package.json 
```
"scripts": {
    "start": "nodemon"
  },
```

is used for nodemon access in **node_modules/.bin/nodemon.**
* Nodemon continuously looks for saved changes and immediately executes all the files that were asked initially whenever a change is detected.

### To include nodemon package into the project use the following steps.

**Step1:** This is done to create a package.json file for npm to use.
```npm init -y```
**Step2:**  This will download and save the node_modules which will have nodemon in .bin folder.
```npm install nodemon --save-dev```
**Step3:** Now you must change scripts in package.json to
```
"scripts": {
    "start": "nodemon"
  },
```
**Step 4:** Now you can use npm to use nodemon and use its features.
An example commmand is ```npm start```. This will use nodemon and basically run ```node app.js``` just that now it will be looking for any saved changes continuously until stopped from the terminal in doing so.
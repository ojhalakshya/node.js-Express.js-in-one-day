// let script2 = require("./script2.js");

/**
 * This works only for node.js version 12.x and higher otherwise
 * you will have to use require keyword methods for imports
 */
import { largeNumber } from "./3_script2.js"

let a = largeNumber;
let b = 5;

console.log(a + b); 
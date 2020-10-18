sayHello = (name) =>
{
  return "Hello " + name;
}
console.log(sayHello("Lakshya"));

const tutorial = require("./tutorial");
console.log(tutorial);


console.log(tutorial.sum(1, 14));
console.log(tutorial.pi);
console.log(new tutorial.mathObject() + "\n");

const tutorial2 = require("./tutorial2");
console.log(tutorial2);

console.log(tutorial2.sum(32, 33));
console.log(tutorial2.pi);
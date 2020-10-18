const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/**
 * created event named "tutorial" and the
 * function to be used when tutorial is
 * triggerred later on.
 */
eventEmitter.on("tutorial", (num1, num2) => 
{
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 1, 2);

class person extends EventEmitter
{
  constructor(name)
  {
    super();
    this._name = name;
  }

  get name()
  {
    return this._name;
  }
}

let pedro = new person("Lakshya");
/**
 * Here the event name is "name" -> yaani 
 * name namka hamne event banaya or usko 
 * baad mai call kar rhe hai ham.
 */
pedro.on("name", () => 
{
  console.log("My name is " + pedro._name);
});

/**
 * Ab yaha par "name" event call karlo
 */
pedro.emit("name");
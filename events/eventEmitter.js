const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("data recieved");
});

customEmitter.on("click", (name) => {
  console.log(name + " Clickd Me!");
});

customEmitter.emit("response");
customEmitter.emit("click", "ali");

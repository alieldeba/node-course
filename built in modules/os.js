const os = require("os");

// info about user
console.log(os.userInfo());

// system uptime in minutes
console.log(os.uptime() / 60);

// system uptime in minutes
console.log(os.type());

// system release
console.log(os.release());

// total memory in bytes
console.log(os.totalmem());

// free memory in bytes
console.log(os.freemem());


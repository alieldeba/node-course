const path = require("path");

// returns path separator (/ or \)
console.log(path.sep);

// returns the file path from your input
console.log(path.join("folder1", "folder2", "index.html"));

// returns file/folder name
console.log(path.basename(__filename));

// works like path.join but it treats the directories
console.log(path.resolve("/b", "/a", "index.css"));

const user = {
  name: "Elena",
  age: "25",
};

module.exports = user;
const path = require("path");
console.log(path.join(__dirname, "test", "second.html"));

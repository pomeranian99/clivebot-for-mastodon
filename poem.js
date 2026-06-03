const lines = require("./lines");

function pick() {
  return lines[Math.floor(Math.random() * lines.length)];
}

function makeNewOne() {
  return `${pick()}\n${pick()}\n${pick()}`;
}

module.exports = { makeNewOne };

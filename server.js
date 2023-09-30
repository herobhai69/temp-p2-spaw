const express = require("express");

const server = express();

server.all("/", (req, res) => {
  res.send("Bot running!");
});

function keepAlive() {
  server.listen(8080, () => {
    console.log("Server ready.");
  });
}

module.exports = keepAlive;

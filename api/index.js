const express = require("express");
const app = express();
let port = 3000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log("Server ready on port 3000."));

module.exports = app;
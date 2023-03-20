const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, "./game")));

app.all('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "./game/index.html"));
});

app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, "./game/index.html"));
});


// Start server
app.listen(8000, () => {
  console.log("server started on port 8000");
});

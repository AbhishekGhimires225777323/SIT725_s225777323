// server.js
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});
app.listen(3000, () => console.log("Server running on port 3000"));

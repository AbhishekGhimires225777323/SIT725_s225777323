const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Client connected");

  // Send current date & time every second
  setInterval(() => {
    const currentDateTime = new Date().toLocaleString();
    socket.emit("serverTime", currentDateTime);
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

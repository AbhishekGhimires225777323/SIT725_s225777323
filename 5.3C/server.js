// server.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/booksdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB Error:", err));

app.use(express.json());
app.use(express.static("public"));

const booksRouter = require("./routes/books.routes");
app.use("/", booksRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running → http://localhost:${PORT}`)
);

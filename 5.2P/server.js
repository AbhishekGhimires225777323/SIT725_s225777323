const express = require("express");
const app = express();
const booksRouter = require("./routes/books.routes.js");

app.use(express.json());
app.use(express.static("public"));
app.use("/", booksRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

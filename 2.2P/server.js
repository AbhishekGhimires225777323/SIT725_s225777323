const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Global middleware
app.use(cors());
app.use(express.json());

// Static file hosting (public folder)
const publicDir = path.resolve(__dirname, "public");
app.use(express.static(publicDir));

// Simple GET route to add two numbers
app.get("/add", (req, res) => {
  const first = Number(req.query.a);
  const second = Number(req.query.b);

  res.json({ result: first + second });
});

// Calculator POST route
app.post("/calculate", (req, res) => {
  const { a, b, operation } = req.body;

  let output;

  const ops = {
    add: () => a + b,
    subtract: () => a - b,
    multiply: () => a * b,
    divide: () => (b === 0 ? "Cannot divide by zero" : a / b),
  };

  if (!ops[operation]) {
    return res.status(400).json({ error: "Unknown operation type" });
  }

  output = ops[operation]();

  res.json({ result: output });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});

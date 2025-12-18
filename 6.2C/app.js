const express = require("express");
const { add } = require("./calc");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "SIT725 Week 6 Testing Example" });
});

app.post("/api/add", (req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    return res
      .status(400)
      .json({ error: "Missing 'a' or 'b' in request body" });
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "'a' and 'b' must be numbers" });
  }

  try {
    const result = add(a, b);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

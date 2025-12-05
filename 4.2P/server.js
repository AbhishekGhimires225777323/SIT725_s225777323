var express = require("express");
var app = express();
var port = process.env.port || 3004;
const mongoose = require("mongoose");

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/deakin725", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("✅ Connected to MongoDB");
});

const petSchema = new mongoose.Schema({
  name: String,
  image: String,
  breed: String,
  isAvailable: Boolean,
  url: String,
  description: String,
});
const Pets = mongoose.model("pets", petSchema);

// REST GET API route
app.get("/api/pets", async (req, res) => {
  const pets = await Pets.find({});
  res.json({ statusCode: 200, data: pets, message: "Success" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

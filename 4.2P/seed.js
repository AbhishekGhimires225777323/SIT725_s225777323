const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/deakin725", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const petSchema = new mongoose.Schema({
  name: String,
  image: String,
  breed: String,
  isAvailable: Boolean,
  url: String,
  description: String,
});

const Project = mongoose.model("Pets", petSchema);

const createKittenData = (id, description, breed, isAvailable) => ({
  name: `Kitten ${id}`,
  image: `images/kitten-${id}.jpg`,
  breed: breed,
  isAvailable: isAvailable,
  link: `About Kitten ${id}`,
  description,
});

const sampleData = [
  createKittenData(1, "Fluffy and adorable kitten", "GoldenRetriever", true),
  createKittenData(2, "Loves to nap in sunbeams", "k9", true),
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));

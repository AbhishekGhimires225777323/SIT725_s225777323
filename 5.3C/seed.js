const mongoose = require("mongoose");
const Book = require("./models/book.model");

mongoose
  .connect("mongodb://127.0.0.1:27017/booksdb")
  .then(() => console.log("DB connected for seeding"))
  .catch((err) => console.log(err));

async function seed() {
  await Book.deleteMany({});

  await Book.insertMany([
    {
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      year: 2008,
      genre: "Science Fiction",
      summary: "The Three-Body Problem is the first novel...",
      price: mongoose.Types.Decimal128.fromString("29.99"),
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847,
      genre: "Classic",
      summary: "An orphaned governess confronts class, morality...",
      price: mongoose.Types.Decimal128.fromString("19.50"),
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Classic",
      summary: "Elizabeth Bennet and Mr. Darcy navigate pride...",
      price: mongoose.Types.Decimal128.fromString("18.00"),
    },
    {
      title: "The English Patient",
      author: "Michael Ondaatje",
      year: 1992,
      genre: "Historical Fiction",
      summary: "In a ruined Italian villa at the end of WWII...",
      price: mongoose.Types.Decimal128.fromString("22.40"),
    },
    {
      title: "Small Gods",
      author: "Terry Pratchett",
      year: 1992,
      genre: "Fantasy",
      summary: "In Omnia, the god Om returns as a tortoise...",
      price: mongoose.Types.Decimal128.fromString("15.99"),
    },
  ]);

  console.log("Seed completed.");
  process.exit();
}

seed();

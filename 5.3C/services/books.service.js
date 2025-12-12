// services/books.service.js

const Book = require("../models/book.model");

function getAllBooks() {
  return Book.find({});
}

function getBookById(id) {
  console.log(id);
  return Book.findOne({ _id: id });
}

module.exports = { getAllBooks, getBookById };

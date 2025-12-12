const bookService = require("../services/books.service");

exports.getAllBooks = async (req, res) => {
  const books = await bookService.getAllBooks();
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await bookService.getBookById(id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
};

exports.integrityCheck42 = (req, res) => {
  res.status(204).send();
};

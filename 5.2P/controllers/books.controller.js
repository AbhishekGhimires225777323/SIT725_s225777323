const bookService = require("../services/books.service");

exports.getAllBooks = (req, res) => {
  const data = bookService.getAllBooks();
  res.json(data);
};

exports.getBookById = (req, res) => {
  const id = req.params.id;
  const book = bookService.getBookById(id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
};

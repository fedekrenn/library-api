const BookService = require("../../entities/services/book");
const handleBooks = new BookService();

const createBook = async (req, res) => {
  const { body } = req;
  const result = await handleBooks.createBook(body);
  res.json(result);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const result = await handleBooks.getBookById(id);
  res.json(result);
};

const getBooks = async (req, res) => {
  const result = await handleBooks.getBooks();
  res.json(result);
};

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const result = await handleBooks.updateBookById(id, body);
  res.json(result);
};

const deleteBookById = async (req, res) => {
  const { id } = req.params;
  const result = await handleBooks.deleteBookById(id);
  res.json(result);
};

module.exports = {
  createBook,
  getBookById,
  getBooks,
  updateBookById,
  deleteBookById,
};

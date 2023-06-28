const { bookService } = require('../../entities/services/index')

const createBook = async (req, res) => {
  const { body: bookData } = req

  const result = await bookService.createBook(bookData)
  res.json(result)
}

const getBookById = async (req, res) => {
  const { id } = req.params

  const result = await bookService.getBookById(id)
  res.json(result)
}

const getBooks = async (req, res) => {
  const result = await bookService.getBooks()
  res.json(result)
}

const updateBookById = async (req, res) => {
  const { id } = req.params
  const { body: bookData } = req

  const result = await bookService.updateBookById(id, bookData)
  res.json(result)
}

const deleteBookById = async (req, res) => {
  const { id } = req.params

  const result = await bookService.deleteBookById(id)
  res.json(result)
}

module.exports = {
  createBook,
  getBookById,
  getBooks,
  updateBookById,
  deleteBookById,
}

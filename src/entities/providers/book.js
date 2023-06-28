const { BookModel } = require('../models/index')

class Book {
  async getBookById(id) {
    try {
      return await BookModel.findByPk(id)
    } catch (error) {
      return error
    }
  }

  async getBooks() {
    try {
      return await BookModel.findAll()
    } catch (error) {
      return error
    }
  }

  async createBook(data) {
    try {
      return await BookModel.create(data)
    } catch (error) {
      return error
    }
  }

  async updateBookById(id, data) {
    try {
      return await BookModel.update(data, { where: { id } })
    } catch (error) {
      return error
    }
  }

  async deleteBookById(id) {
    try {
      return await BookModel.destroy({ where: { id } })
    } catch (error) {
      return error
    }
  }
}

module.exports = Book

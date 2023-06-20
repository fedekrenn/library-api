const Libro = require("../models/book");
// const { Op } = require("sequelize");

class Book {
  async createBook(data) {
    try {
      const book = await Libro.create(data);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async getBookById(id) {
    try {
      const book = await Libro.findByPk(id);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async getBooks() {
    try {
      const book = await Libro.findAll()
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async updateBookById(id, data) {
    try {
      const book = await Libro.update(data, { where: { id } });
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBookById(id) {
    try {
      const book = await Libro.destroy({ where: { id } });
      return book;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Book;

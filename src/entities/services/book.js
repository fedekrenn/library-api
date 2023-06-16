import { BookModel } from "../models/index";
// const { Op } = require("sequelize");

class Book {
  async createBook(data) {
    try {
      const book = await BookModel.create(data);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async getBookById(id) {
    try {
      const book = await BookModel.findByPk(id);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async getBooks() {
    try {
      const book = await BookModel.findAll();
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async updateBookById(id, data) {
    try {
      const book = await BookModel.update(data, { where: { id } });
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBookById(id) {
    try {
      const book = await BookModel.destroy({ where: { id } });
      return book;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Book;

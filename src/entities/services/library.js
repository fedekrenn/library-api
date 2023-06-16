import { LibraryModel } from "../models/index";
// const { Op } = require("sequelize");

class Library {
  async createLibrary(data) {
    try {
      const library = await LibraryModel.create(data);
      return library;
    } catch (error) {
      console.log(error);
    }
  }

  async getLibraryById(id) {
    try {
      const library = await LibraryModel.findByPk(id);
      return library;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllLibraries() {
    try {
      const libraries = await LibraryModel.findAll();
      return libraries;
    } catch (error) {
      console.log(error);
    }
  }

  async updateLibraryById(id, data) {
    try {
      const library = await LibraryModel.update(data, { where: { id } });
      return library;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteLibraryById(id) {
    try {
      const library = await LibraryModel.destroy({ where: { id } });
      return library;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Library;

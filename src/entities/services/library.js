const Libreria = require("../models/library");
// const { Op } = require("sequelize");

class Library {
  async createLibrary(data) {
    try {
      const library = await Libreria.create(data);
      return library;
    } catch (error) {
      console.log(error);
    }
  }

  async getLibraryById(id) {
    try {
      const library = await Libreria.findByPk(id);
      return library;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllLibraries() {
    try {
      const libraries = await Libreria.findAll();
      return libraries;
    } catch (error) {
      console.log(error);
    }
  }

  async updateLibraryById(id, data) {
    try {
      const library = await Libreria.update(data, { where: { id } });
      return library;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteLibraryById(id) {
    try {
      const library = await Libreria.destroy({ where: { id } });
      return library;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Library;

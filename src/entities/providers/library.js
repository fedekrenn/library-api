const { LibraryModel, BookModel } = require('../models/index')

class Library {
  async getLibraryById(id) {
    try {
      return await LibraryModel.findByPk(id, { include: [BookModel] })
    } catch (error) {
      return error
    }
  }

  async getDeletedLibraryById(id) {
    try {
      return await LibraryModel.findByPk(id, { paranoid: false })
    } catch (error) {
      return error
    }
  }

  async getAllLibraries() {
    try {
      return await LibraryModel.findAll({ include: [BookModel] })
    } catch (error) {
      return error
    }
  }

  async createLibrary(data) {
    try {
      return await LibraryModel.create(data)
    } catch (error) {
      return error
    }
  }

  async updateLibraryById(id, data) {
    try {
      return await LibraryModel.update(data, { where: { id } })
    } catch (error) {
      return error
    }
  }

  async deleteLibraryById(id) {
    try {
      return await LibraryModel.destroy({ where: { id } })
    } catch (error) {
      return error
    }
  }
}

module.exports = Library

const { LibraryModel, BookModel } = require('../models/index')

class Library {
  async getLibraryById(id) {
    try {
      const library = await LibraryModel.findByPk(id, {
        include: [BookModel],
      })
      if (!library)
        return { error: 1, message: `No existe librería con id ${id}` }

      return library
    } catch (error) {
      return { error: 3, message: `Error al traer librería por id: ${error}` }
    }
  }

  async getAllLibraries() {
    try {
      const libraries = await LibraryModel.findAll({
        include: [BookModel],
      })
      if (libraries.length === 0)
        return { error: 1, message: 'Todavía no se cargaron librerías' }

      return libraries
    } catch (error) {
      return {
        error: 3,
        message: `Error al traer todas las librerías: ${error}`,
      }
    }
  }

  async createLibrary(data) {
    try {
      const res = await LibraryModel.create(data)
      return {
        status: 'ok',
        message: `Librería creada correctamente bajo el id ${res.id}`,
      }
    } catch (error) {
      return { error: 3, message: `Error al crear librería: ${error}` }
    }
  }

  async updateLibraryById(id, data) {
    try {
      const res = await LibraryModel.update(data, { where: { id } })
      if (res[0] === 0)
        return { error: 1, message: `No existe librería con id ${id}` }

      return {
        status: 'ok',
        message: `Librería actualizada correctamente bajo el id ${id}`,
      }
    } catch (error) {
      return { error: 3, message: `Error al actualizar librería: ${error}` }
    }
  }

  async deleteLibraryById(id) {
    try {
      const res = await LibraryModel.destroy({ where: { id } })
      if (res === 0)
        return { error: 1, message: `No existe librería con id ${id}` }

      return {
        status: 'ok',
        message: `Librería eliminada correctamente bajo el id ${id}`,
      }
    } catch (error) {
      return { error: 3, message: `Error al eliminar librería: ${error}` }
    }
  }
}

module.exports = Library

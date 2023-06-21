const Libreria = require('../models/library')
const Libro = require('../models/book')

class Library {
  async getLibraryById(id) {
    try {
      const library = await Libreria.findByPk(id, {
        include: [Libro],
      })
      if (!library) return `No existe librería con id ${id}`

      return library
    } catch (error) {
      return `Error al traer librería por id: ${error}`
    }
  }

  async getAllLibraries() {
    try {
      const libraries = await Libreria.findAll({
        include: [Libro],
      })
      if (libraries.length === 0) return 'Todavía no se cargaron librerías'

      return libraries
    } catch (error) {
      return `Error al traer todas las librerías: ${error}`
    }
  }

  async createLibrary(data) {
    try {
      const res = await Libreria.create(data)
      return `Librería creada correctamente bajo el id ${res.id}`
    } catch (error) {
      return `Error al crear librería: ${error}`
    }
  }

  async updateLibraryById(id, data) {
    try {
      const res = await Libreria.update(data, { where: { id } })
      if (res[0] === 0) return `No existe librería con id ${id}`

      return `Librería actualizada correctamente bajo el id ${id}`
    } catch (error) {
      return `Error al actualizar librería: ${error}`
    }
  }

  async deleteLibraryById(id) {
    try {
      const res = await Libreria.destroy({ where: { id } })
      if (res === 0) return `No existe librería con id ${id}`

      return `Librería eliminada correctamente bajo el id ${id}`
    } catch (error) {
      return `Error al eliminar librería: ${error}`
    }
  }
}

module.exports = Library

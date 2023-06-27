const { LibraryModel, BookModel } = require('../models/index')

class Book {
  async getBookById(id) {
    try {
      const book = await BookModel.findByPk(id)
      if (!book) return `No existe libro con id ${id}`

      return book
    } catch (error) {
      return `Error al traer libro por id: ${error}`
    }
  }

  async getBooks() {
    try {
      const books = await BookModel.findAll()
      if (books.length === 0) return 'Todavía no se cargaron libros'

      return books
    } catch (error) {
      return `Error al traer todos los libros: ${error}`
    }
  }

  async createBook(data) {
    try {
      const libraryFound = await LibraryModel.findOne({
        where: { id: data.libraryId },
        paranoid: false,
      })

      if (libraryFound?.deletedAt)
        return `La librería id ${data.libraryId} se encuentra eliminada, por lo que no se puede añadir un libro a la misma`

      const res = await BookModel.create(data)
      return `Libro creado correctamente bajo el id ${res.id}`
    } catch (error) {
      return error.name === 'SequelizeForeignKeyConstraintError'
        ? 'Ese Id de librería no existe'
        : `Error al crear libro: ${error}`
    }
  }

  async updateBookById(id, data) {
    try {
      const res = await BookModel.update(data, { where: { id } })
      if (res[0] === 0) return `No existe libro con id ${id}`

      return `Libro actualizado correctamente bajo el id ${id}`
    } catch (error) {
      return `Error al actualizar libro: ${error}`
    }
  }

  async deleteBookById(id) {
    try {
      const res = await BookModel.destroy({ where: { id } })
      if (res === 0) return `No existe libro con id ${id}`

      return `Libro eliminado correctamente bajo el id ${id}`
    } catch (error) {
      return `Error al eliminar libro: ${error}`
    }
  }
}

module.exports = Book

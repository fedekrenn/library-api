const { LibraryModel, BookModel } = require('../models/index')

class Book {
  async getBookById(id) {
    try {
      const book = await BookModel.findByPk(id)
      if (!book) return { status: 'warning', message: `No existe libro con id ${id}` }

      return book
    } catch (error) {
      return { error: 3, message: `Error al traer libro por id: ${error}` }
    }
  }

  async getBooks() {
    try {
      const books = await BookModel.findAll()
      if (books.length === 0)
        return { status: 'warning', message: 'Todavía no se cargaron libros' }

      return books
    } catch (error) {
      return { error: 3, message: `Error al traer todos los libros: ${error}` }
    }
  }

  async createBook(data) {
    try {
      if (data.libraryId) {
        const libraryFound = await LibraryModel.findOne({
          where: { id: data.libraryId },
          paranoid: false,
        })

        if (libraryFound?.deletedAt)
          return {
            status: 'warning',
            message: `La librería id ${data.libraryId} se encuentra eliminada, por lo que no se puede añadir un libro a la misma. Puedes añadir un nuevo libro y que no pertenezca a ninguna librería omitiendo el campo libraryId o bien intentar nuevamente con un id de librería existente`,
          }
      }

      const res = await BookModel.create(data)
      return {
        status: 'ok',
        message: `Libro creado correctamente bajo el id ${res.id}`,
      }
    } catch (error) {
      return error.name === 'SequelizeForeignKeyConstraintError'
        ? {
            status: 'warning',
            message:
              'Ese Id de librería no existe. Puedes añadir un nuevo libro y que no pertenezca a ninguna librería omitiendo el campo libraryId o bien intentar nuevamente con un id de librería existente',
          }
        : { error: 3, message: `Error al crear libro: ${error}` }
    }
  }

  async updateBookById(id, data) {
    try {
      const res = await BookModel.update(data, { where: { id } })
      if (res[0] === 0)
        return { error: 1, message: `No existe libro con id ${id}` }

      return {
        status: 'ok',
        message: `Libro actualizado correctamente bajo el id ${id}`,
      }
    } catch (error) {
      return { error: 3, message: `Error al actualizar libro: ${error}` }
    }
  }

  async deleteBookById(id) {
    try {
      const res = await BookModel.destroy({ where: { id } })
      if (res === 0)
        return { error: 1, message: `No existe libro con id ${id}` }

      return {
        status: 'ok',
        message: `Libro eliminado correctamente bajo el id ${id}`,
      }
    } catch (error) {
      return { error: 3, message: `Error al eliminar libro: ${error}` }
    }
  }
}

module.exports = Book

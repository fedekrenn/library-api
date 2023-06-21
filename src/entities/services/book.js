const Libro = require('../models/book')

class Book {
  async getBookById(id) {
    try {
      const book = await Libro.findByPk(id)
      if (!book) return `No existe libro con id ${id}`

      return book
    } catch (error) {
      return `Error al traer libro por id: ${error}`
    }
  }

  async getBooks() {
    try {
      const books = await Libro.findAll()
      if (books.length === 0) return 'Todavía no se cargaron libros'

      return books
    } catch (error) {
      return `Error al traer todos los libros: ${error}`
    }
  }

  async createBook(data) {
    try {
      const res = await Libro.create(data)
      return `Libro creado correctamente bajo el id ${res.id}`
    } catch (error) {
      return `Error al crear libro: ${error}`
    }
  }

  async updateBookById(id, data) {
    try {
      const res = await Libro.update(data, { where: { id } })
      if (res[0] === 0) return `No existe libro con id ${id}`

      return `Libro actualizado correctamente bajo el id ${id}`
    } catch (error) {
      return `Error al actualizar libro: ${error}`
    }
  }

  async deleteBookById(id) {
    try {
      const res = await Libro.destroy({ where: { id } })
      if (res === 0) return `No existe libro con id ${id}`
      
      return `Libro eliminado correctamente bajo el id ${id}`
    } catch (error) {
      return `Error al eliminar libro: ${error}`
    }
  }
}

module.exports = Book

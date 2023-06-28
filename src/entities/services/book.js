const { LibraryProvider, BookProvider } = require('../providers/index')

const libraryProvider = new LibraryProvider()
const bookProvider = new BookProvider()

class Book {
  async getBookById(id) {
    try {
      const book = await bookProvider.getBookById(id)

      if (!book)
        return { status: 'warning', message: `No existe libro con id ${id}` }

      return book
    } catch (error) {
      return { error: 3, message: `Error al traer libro por id: ${error}` }
    }
  }

  async getBooks() {
    try {
      const books = await bookProvider.getBooks()

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
        const libraryFound = await libraryProvider.getDeletedLibraryById(
          data.libraryId
        )

        if (!libraryFound)
          return {
            status: 'warning',
            message: `La librería id ${data.libraryId} no existe. Puedes añadir un nuevo libro y que no pertenezca a ninguna librería omitiendo el campo libraryId o bien intentar nuevamente con un id de librería existente`,
          }

        if (libraryFound.deletedAt)
          return {
            status: 'warning',
            message: `La librería id ${data.libraryId} se encuentra eliminada, por lo que no se puede añadir un libro a la misma. Puedes añadir un nuevo libro y que no pertenezca a ninguna librería omitiendo el campo libraryId o bien intentar nuevamente con un id de librería existente`,
          }
      }

      const res = await bookProvider.createBook(data)
      
      return {
        status: 'ok',
        message: `Libro creado correctamente bajo el id ${res.id}`,
      }
    } catch (error) {
      return { error: 3, message: `Error al crear libro: ${error}` }
    }
  }

  async updateBookById(id, data) {
    try {
      const res = await bookProvider.updateBookById(id, data)

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
      const res = await bookProvider.deleteBookById(id)

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

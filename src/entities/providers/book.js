class Book {
  constructor(model) {
    this.model = model
  }

  async getBookById(id) {
    try {
      return await this.model.findByPk(id)
    } catch (error) {
      return error
    }
  }

  async getBooks() {
    try {
      return await this.model.findAll()
    } catch (error) {
      return error
    }
  }

  async createBook(data) {
    try {
      return await this.model.create(data)
    } catch (error) {
      return error
    }
  }

  async updateBookById(id, data) {
    try {
      return await this.model.update(data, { where: { id } })
    } catch (error) {
      return error
    }
  }

  async deleteBookById(id) {
    try {
      return await this.model.destroy({ where: { id } })
    } catch (error) {
      return error
    }
  }
}

module.exports = Book

class Library {
  constructor(model, referenceModel) {
    this.model = model
    this.referenceModel = referenceModel
  }

  async getLibraryById(id) {
    try {
      return await this.model.findByPk(id, { include: [this.referenceModel] })
    } catch (error) {
      return error
    }
  }

  async getAllLibraries() {
    try {
      return await this.model.findAll({ include: [this.referenceModel] })
    } catch (error) {
      return error
    }
  }

  async getDeletedLibraryById(id) {
    try {
      return await this.model.findByPk(id, { paranoid: false })
    } catch (error) {
      return error
    }
  }

  async createLibrary(data) {
    try {
      return await this.model.create(data)
    } catch (error) {
      return error
    }
  }

  async updateLibraryById(id, data) {
    try {
      return await this.model.update(data, { where: { id } })
    } catch (error) {
      return error
    }
  }

  async deleteLibraryById(id) {
    try {
      return await this.model.destroy({ where: { id } })
    } catch (error) {
      return error
    }
  }
}

module.exports = Library

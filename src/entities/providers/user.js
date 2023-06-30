class User {
  constructor(model) {
    this.model = model
  }

  async createUser(user) {
    try {
      return await this.model.create(user)
    } catch (error) {
      return error
    }
  }

  async validateUser(data) {
    try {
      return await this.model.findOne({ where: { name: data.name } })
    } catch (error) {
      return error
    }
  }
}

module.exports = User

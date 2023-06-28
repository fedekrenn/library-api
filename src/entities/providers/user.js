const { UserModel } = require('../models/index')

class User {
  async createUser(user) {
    try {
      return await UserModel.create(user)
    } catch (error) {
      return error
    }
  }

  async validateUser(data) {
    try {
      return await UserModel.findOne({ where: { name: data.name } })
    } catch (error) {
      return error
    }
  }
}

module.exports = User

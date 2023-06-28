const { UserModel } = require('../models/index')

class User {
  async createUser(user) {
    try {
      const res = await UserModel.create(user)
      return {
        status: 'ok',
        message: `Usuario creado correctamente bajo el id ${res.id}`,
      }
    } catch (error) {
      return { error: 3, message: `Error al crear usuario: ${error}` }
    }
  }

  async validateUser(data) {
    try {
      const user = await UserModel.findOne({ where: { name: data.name } })
      if (!user) return { error: 1, message: `Usuario no encontrado` }
      if (parseInt(user.password) !== data.password)
        return { error: 2, message: `Contraseña incorrecta` }

      return user
    } catch (error) {
      return { error: 3, message: `Error al validar usuario: ${error}` }
    }
  }
}

module.exports = User

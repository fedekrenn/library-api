const { UserProvider } = require('../providers/index')
const userProvider = new UserProvider()

class User {
  async createUser(user) {
    try {
      const res = await userProvider.createUser(user)

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
      const user = await userProvider.validateUser(data)

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

const jwt = require('jsonwebtoken')
const { SERVER_SECRET } = require('../../config/config')
const { userService } = require('../../entities/services/index')

const createUser = async (req, res) => {
  const { body: userData } = req

  const result = await userService.createUser(userData)
  res.json(result)
}

const validateUser = async (req, res) => {
  const { body: userData } = req

  const validUser = await userService.validateUser(userData)

  if (validUser.error)
    return res.status(401).json({ status: 'error', ...validUser })

  const token = jwt.sign({ validUser }, SERVER_SECRET, {
    expiresIn: '10m',
  })

  return res.json({ status: 'ok', message: 'Accediste correctamente!', token })
}

module.exports = {
  createUser,
  validateUser,
}

const jwt = require('jsonwebtoken')
const { SERVER_SECRET } = require('../../config/config')

const UserService = require('../../entities/services/user')
const handleUsers = new UserService()

const createUser = async (req, res) => {
  const { body } = req
  const result = await handleUsers.createUser(body)
  res.json(result)
}

const validateUser = async (req, res) => {
  const { body } = req
  const validUser = await handleUsers.validateUser(body)

  if (validUser.error)
    return res.status(401).json({ message: validUser.message })

  const token = jwt.sign({ validUser }, SERVER_SECRET, {
    expiresIn: '2m',
  })

  return res.json({ message: 'Accediste correctamente!', token })
}

module.exports = {
  createUser,
  validateUser,
}

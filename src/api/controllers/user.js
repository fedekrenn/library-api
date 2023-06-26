const UserService = require('../../entities/services/user')
const handleUsers = new UserService()

const createUser = async (req, res) => {
  const { body } = req
  const result = await handleUsers.createUser(body)
  res.json(result)
}

const validateUser = async (req, res) => {
  const { body } = req
  const result = await handleUsers.validateUser(body)
  res.json(result)
}

module.exports = {
  createUser,
  validateUser,
}

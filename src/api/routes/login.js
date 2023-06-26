const express = require('express')
const { Router } = express

const { validateUser } = require('../controllers/user')

const routerValidateUser = Router()

/* ---------- POST ------------ */

routerValidateUser.post('/', validateUser)

module.exports = routerValidateUser

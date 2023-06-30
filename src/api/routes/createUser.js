const express = require('express')
const { Router } = express

const { createUser } = require('../controllers/user')

const routerCreateUser = Router()

/* ---------- POST ------------ */

routerCreateUser.post('/', createUser)

module.exports = routerCreateUser

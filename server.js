const express = require('express')
const app = express()
const { initializeDB } = require('./src/config/db-config')

const {
  routerBook,
  routerLibrary,
  routerCreateUser,
  routerValidateUser,
} = require('./src/api/routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/book', routerBook)
app.use('/api/library', routerLibrary)
app.use('/register', routerCreateUser)
app.use('/login', routerValidateUser)

app.get('/', (req, res) => {
  res.status(200).json({
    res: 'Bienvenidos a la API Librería',
    metodoLibros: '/api/book',
    metodoLibrerias: '/api/library',
  })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Página no encontrada' })
})

const port = process.env.PORT || 3000

const server = app.listen(port, async () => {
  await initializeDB()
  console.log(`Express running → PORT ${port}`)
})

server.on('error', (err) => {
  console.error('Server error:', err)
})

const { bookProvider, libraryProvider, userProvider } = require('../providers/index')

const Library = require('./library')
const Book = require('./book')
const User = require('./user')

const libraryService = new Library(libraryProvider)
const bookService = new Book(bookProvider, libraryProvider)
const userService = new User(userProvider)

module.exports = { libraryService, bookService, userService }

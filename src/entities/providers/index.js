const { BookModel, LibraryModel, UserModel } = require('../models/index')

const Library = require('./library')
const Book = require('./book')
const User = require('./user')

const libraryProvider = new Library(LibraryModel, BookModel)
const bookProvider = new Book(BookModel)
const userProvider = new User(UserModel)

module.exports = { libraryProvider, bookProvider, userProvider }

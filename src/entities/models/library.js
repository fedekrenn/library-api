const { DataTypes } = require('sequelize')
const { sequelize: db } = require('../../config/db-config')
const Book = require('./book')

const Library = db.define('library', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Library.hasMany(Book)
Book.belongsTo(Library)

module.exports = Library

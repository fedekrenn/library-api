const { DataTypes } = require('sequelize')
const { sequelize: db } = require('../../config/db-config')

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = User

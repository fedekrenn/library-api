const { DataTypes } = require("sequelize");
const { sequelize: db } = require("../../config/db-config");
const Libro = require("./book");

const Libreria = db.define("libreria", {
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
});

Libreria.hasMany(Libro, { foreignKey: "libraryId" });

module.exports = Libreria;

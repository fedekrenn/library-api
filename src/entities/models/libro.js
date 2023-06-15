const { DataTypes } = require("sequelize");
const { sequelize: db } = require("../../config/db-config");
const Libreria = require("./libreria");

const Libro = db.define("libro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Libro.belongsTo(Libreria, { foreignKey: "libraryId" });

module.exports = Libro;

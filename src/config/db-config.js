const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Se logró conectar a la base de datos.");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Error al inicializar dB", error);
  }
};

module.exports = { sequelize, initializeDB };

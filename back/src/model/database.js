var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "films", //db
  "root", //user
  "", //passewrd
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

module.exports = sequelize;

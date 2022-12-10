var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "films", //db
  "root", //user
  "", //password
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

module.exports = sequelize;

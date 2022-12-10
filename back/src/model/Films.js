const Sequelize = require("sequelize");
var sequelize = require("./database");

var nametable = "films";

var Films = sequelize.define(nametable, {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  rate: Sequelize.STRING,
  my_rate: Sequelize.STRING,
  genre: Sequelize.STRING,
});

module.exports = Films;

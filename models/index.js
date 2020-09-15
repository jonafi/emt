"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.JAWSDB_URL || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};


if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL, {
   dialect: "mysql",
   pool: { max: 5, min: 0, idle: 10000 }
  });
} else {

  sequelize = new Sequelize("sequelize_library", "root", "Orange1!", {
   host: "localhost",
   port: 3306,
   dialect: "mysql",
   pool: { max: 5, min: 0, idle: 10000 }

 });
}


fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    // issue with sequelize import, hence now line 28 is different
    var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

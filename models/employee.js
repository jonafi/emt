
let Sequelize = require("sequelize");
let sequelize;
if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 10000 }
  });
} else {
   sequelize = new Sequelize("sequelize_library", "root", "amillionwords", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 10000 }

  });
}
  let Employee = sequelize.define("employee", {
    id: {primaryKey:true, type: Sequelize.INTEGER},
    first_name: Sequelize.INTEGER,
    last_name: Sequelize.STRING
  });

  Employee.sync();
  module.exports = Employee;

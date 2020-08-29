let Sequelize = require("sequelize");
let sequelize;
if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 10000 }
  });
} else {
   sequelize = new Sequelize("sequelize_library", "root", "HELLO", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 10000 }

  });
}
  let Employee = sequelize.define("employee", {
    department: Sequelize.STRING,
    status: Sequelize.STRING,
    role: Sequelize.STRING,
    first_name: Sequelize.STRING,
    middle_init: Sequelize.STRING,
    last_name: Sequelize.STRING,
    address_line1: Sequelize.STRING,
    address_line2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
    primary_phone: Sequelize.STRING,
    personal_email: Sequelize.STRING,
    work_email: Sequelize.STRING,
    hire_date: Sequelize.DATE,
    birth_date: Sequelize.DATE,
    gender: Sequelize.STRING,
    pay_type: Sequelize.STRING,
    pay_freq: Sequelize.STRING,
    pay_rate: Sequelize.NUMBER,
    app_source: Sequelize.STRING,
    app_rec: Sequelize.BOOLEAN,
    i9_rec: Sequelize.BOOLEAN,
    w4_rec: Sequelize.BOOLEAN,
    ca_rec: Sequelize.BOOLEAN,
    exp_rec: Sequelize.BOOLEAN,
    tmh_rec: Sequelize.BOOLEAN,
    welcome_train: Sequelize.BOOLEAN,
    core_camp_train: Sequelize.BOOLEAN
  });

  Employee.sync();


  module.exports = Employee;
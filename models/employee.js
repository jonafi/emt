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


    department: { type: Sequelize.STRING, validate: { isIn: [["Admin", "Tannerco", "MN117", "MN129", "MN140"]]}},
    status: { type: Sequelize.STRING, validate: { isIn: [["Active", "Terminated", "Candidate"]]}},
    role: {type: Sequelize.STRING, validate: { isIn: [["Admin", "Manager", "Area Mgr", "Sr Manager", "Stylist", "Asst Mgr", "IT"]]}},
    first_name: {type: Sequelize.STRING, allowNull: false},

    middle_init: Sequelize.STRING,
    last_name: {type: Sequelize.STRING, allowNull: false},
    address_line1: Sequelize.STRING,
    address_line2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
    primary_phone: {type: Sequelize.STRING, allowNull: false, validate: {isNumeric: true}},
    personal_email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}},
    work_email:  {type: Sequelize.STRING, validate: {isEmail: true}},
    hire_date: {type: Sequelize.DATE, validate: {isDate: true}},
    birth_date: {type: Sequelize.DATE, validate: {isDate: true}},
    gender: { type: Sequelize.STRING, validate: { isIn: [["M", "F"]]}},
    pay_type:  { type: Sequelize.STRING, defaultValue: "Hourly", validate: { isIn: [["Hourly", "Salary"]] }},
    pay_freq: { type: Sequelize.STRING, defaultValue: "Biweekly", validate: { isIn: [["Weekly", "Biweekly"]] }},
    pay_rate: {type: Sequelize.DECIMAL, defaultValue: 0},
    app_source: { type: Sequelize.STRING, validate: { isIn: [["Email", "Text", "Indeed", "Behind the Chair", "Craigslist"]]}},
    app_rec: {type: Sequelize.BOOLEAN, defaultValue: false},
    i9_rec: {type: Sequelize.BOOLEAN, defaultValue: false},
    w4_rec: {type: Sequelize.BOOLEAN, defaultValue: false},
    ca_rec: {type: Sequelize.BOOLEAN, defaultValue: false},
    exp_rec: {type: Sequelize.BOOLEAN, defaultValue: false},
    tmh_rec: {type: Sequelize.BOOLEAN, defaultValue: false},
    welcome_train: {type: Sequelize.BOOLEAN, defaultValue: false},
    core_camp_train: {type: Sequelize.BOOLEAN, defaultValue: false}
  });

  Employee.sync();


  module.exports = Employee;

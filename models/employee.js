module.exports = function(sequelize, DataTypes) {

  var Employee = sequelize.define("employee", {

    department: { type: DataTypes.STRING, validate: { isIn: [["Admin", "Tannerco", "MN117", "MN129", "MN140"]]}},
    status: { type: DataTypes.STRING, validate: { isIn: [["Active", "Terminated", "Candidate"]]}},
    role: {type: DataTypes.STRING, validate: { isIn: [["Admin", "Manager", "Area Mgr", "Sr Manager", "Stylist", "Asst Mgr", "IT"]]}},
    first_name: {type: DataTypes.STRING, allowNull: false},
    middle_init: DataTypes.STRING,
    last_name: {type: DataTypes.STRING, allowNull: false},
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    primary_phone: {type: DataTypes.STRING, allowNull: false, validate: {isNumeric: true}},
    personal_email: {type: DataTypes.STRING, allowNull: false, validate: {isEmail: true}},
    work_email:  {type: DataTypes.STRING, validate: {isEmail: true}},
    hire_date: {type: DataTypes.DATE, validate: {isDate: true}},
    birth_date: {type: DataTypes.DATE, validate: {isDate: true}},
    gender: { type: DataTypes.STRING, validate: { isIn: [["M", "F"]]}},
    pay_type:  { type: DataTypes.STRING, defaultValue: "Hourly", validate: { isIn: [["Hourly", "Salary"]] }},
    pay_freq: { type: DataTypes.STRING, defaultValue: "Biweekly", validate: { isIn: [["Weekly", "Biweekly"]] }},
    pay_rate: {type: DataTypes.DECIMAL, defaultValue: 0},
    app_source: { type: DataTypes.STRING, validate: { isIn: [["Email", "Text", "Indeed", "Behind the Chair", "Craigslist"]]}},
    app_rec: {type: DataTypes.BOOLEAN, defaultValue: false},
    i9_rec: {type: DataTypes.BOOLEAN, defaultValue: false},
    w4_rec: {type: DataTypes.BOOLEAN, defaultValue: false},
    ca_rec: {type: DataTypes.BOOLEAN, defaultValue: false},
    exp_rec: {type: DataTypes.BOOLEAN, defaultValue: false},
    tmh_rec: {type: DataTypes.BOOLEAN, defaultValue: false},
    welcome_train: {type: DataTypes.BOOLEAN, defaultValue: false},
    core_camp_train: {type: DataTypes.BOOLEAN, defaultValue: false}
  });

  return Employee;
}

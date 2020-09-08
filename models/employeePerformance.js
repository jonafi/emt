let Sequelize = require("sequelize");
let sequelize;

if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL, {
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
  
let EmployeePerformance = sequelize.define("employeePerformance", {

    employeeId: { type: Sequelize.INTEGER, allowNull: false},
    reviewYear: {type: Sequelize.STRING, allowNull: false},
    reviewQtr: {type: Sequelize.STRING, allowNull: false},
    reviewStatus: { type: Sequelize.STRING, validate: { isIn: [["Complete", "Pending"]]}},
    goalNetSales: { type: Sequelize.DECIMAL, defaultValue: 0},
    goalHours: { type: Sequelize.DECIMAL, defaultValue: 0},
    goalBB: { type: Sequelize.DECIMAL, defaultValue: 0},
    goalTHPC: { type: Sequelize.DECIMAL, defaultValue: 0},
    goalCPFH: { type: Sequelize.DECIMAL, defaultValue: 0},
    goalSPH: { type: Sequelize.DECIMAL, defaultValue: 0},
    goalAttendance: { type: Sequelize.INTEGER, defaultValue: 0},
    goalAttitude: { type: Sequelize.INTEGER, defaultValue: 0},
    actualNetSales: { type: Sequelize.DECIMAL, defaultValue: 0},
    actualHours: { type: Sequelize.DECIMAL, defaultValue: 0},
    actualBB: { type: Sequelize.DECIMAL, defaultValue: 0},
    actualTHPC: { type: Sequelize.DECIMAL, defaultValue: 0},
    actualCPFH: { type: Sequelize.DECIMAL, defaultValue: 0},
    actualSPH: { type: Sequelize.DECIMAL, defaultValue: 0},
    actualAttendance: { type: Sequelize.INTEGER, defaultValue: 0},
    actualAttitude: { type: Sequelize.INTEGER, defaultValue: 0}
  });

  EmployeePerformance.sync();

  module.exports = EmployeePerformance;

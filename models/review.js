module.exports = function (sequelize, DataTypes) {

 var Review = sequelize.define("review", {

    employeeId: { type: DataTypes.INTEGER, allowNull: false},
    reviewYear: {type: DataTypes.STRING, allowNull: false},
    reviewQtr: {type: DataTypes.STRING, allowNull: false},
    reviewStatus: { type: DataTypes.STRING, validate: { isIn: [["Complete", "Pending"]]}},
    goalNetSales: { type: DataTypes.DECIMAL, defaultValue: 0},
    goalHours: { type: DataTypes.DECIMAL, defaultValue: 0},
    goalBB: { type: DataTypes.DECIMAL, defaultValue: 0},
    goalTHPC: { type: DataTypes.DECIMAL, defaultValue: 0},
    goalCPFH: { type: DataTypes.DECIMAL, defaultValue: 0},
    goalSPH: { type: DataTypes.DECIMAL, defaultValue: 0},
    goalAttendance: { type: DataTypes.INTEGER, defaultValue: 0},
    goalAttitude: { type: DataTypes.INTEGER, defaultValue: 0},
    actualNetSales: { type: DataTypes.DECIMAL, defaultValue: 0},
    actualHours: { type: DataTypes.DECIMAL, defaultValue: 0},
    actualBB: { type: DataTypes.DECIMAL, defaultValue: 0},
    actualTHPC: { type: DataTypes.DECIMAL, defaultValue: 0},
    actualCPFH: { type: DataTypes.DECIMAL, defaultValue: 0},
    actualSPH: { type: DataTypes.DECIMAL, defaultValue: 0},
    actualAttendance: { type: DataTypes.INTEGER, defaultValue: 0},
    actualAttitude: { type: DataTypes.INTEGER, defaultValue: 0}
  });

  return Review;
}

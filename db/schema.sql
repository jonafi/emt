CREATE DATABASE sequelize_library;

USE sequelize_library;

CREATE TABLE employees (
  department VARCHAR(10) NOT NULL,
  status VARCHAR (10) NOT NULL,
  role VARCHAR (10) NOT NULL,
  first_name VARCHAR (25) NOT NULL,
  middle_init VARCHAR (2),
  last_name VARCHAR (30) NOT NULL,
  address_line1 VARCHAR (25),
  address_line2 VARCHAR (25),
  city VARCHAR (20),
  state VARCHAR (20),
  zip VARCHAR (9),
  primary_phone VARCHAR (10) NOT NULL,
  personal_email VARCHAR (100) NOT NULL,
  work_email VARCHAR (30),
  hire_date DATE NOT NULL,
  birth_date DATE NOT NULL,
  gender VARCHAR (1) DEFAULT "F",
  pay_type VARCHAR (10) DEFAULT "Hourly",
  pay_freq VARCHAR (10) DEFAULT "Biweekly",
  pay_rate NUMERIC (6,2) DEFAULT 0,
  app_source VARCHAR (20), 
  app_rec BOOLEAN DEFAULT false,
  i9_rec BOOLEAN DEFAULT false,
  w4_rec BOOLEAN DEFAULT false,
  ca_rec BOOLEAN DEFAULT false,
  exp_rec BOOLEAN DEFAULT false,
  tmh_rec BOOLEAN DEFAULT false,
  welcome_train BOOLEAN DEFAULT false,
  core_camp_train BOOLEAN DEFAULT false,
  createdAT DATETIME DEFAULT NOW(),
  updatedAT DATETIME DEFAULT NOW(),
  PRIMARY KEY (id)
);

CREATE TABLE employeePerformance (
  empployeeId INT NOT NULL,
  reviewYear VARCHAR (4) NOT NULL,
  reviewQtr Varchar (2) NOT NULL, 
  reviewStatus VARCHAR (10) NOT NULL,
  goalNetsales NUMERIC (6,2) DEFAULT 0,
  goalHours NUMERIC (6,2) DEFAULT 0,
  goalBB NUMERIC (3,2) DEFAULT 0,
  goalTHPC NUMERIC (2,2) DEFAULT 0,
  goalCPFH NUMERIC (2,2) DEFAULT 0,
  goalSPH NUMERIC (3,2) DEFAULT 0,
  goalL360 NUMERIC (2,2) DEFAULT 0,
  goalAttendance INT DEFAULT 0;
  goalAttitude INT DEFAULT 0;
  actualOverallRating INT DEFAULT 0;
  actualNetsales NUMERIC (6,2) DEFAULT 0,
  actualHours NUMERIC (6,2) DEFAULT 0,
  actualBB NUMERIC (3,2) DEFAULT 0,
  actualTHPC NUMERIC (2,2) DEFAULT 0,
  actualCPFH NUMERIC (2,2) DEFAULT 0,
  actualSPH NUMERIC (3,2) DEFAULT 0,
  actualL360 NUMERIC (2,2) DEFAULT 0,
  actualAttendance INT DEFAULT 0;
  actualAttitude INT DEFAULT 0;
);


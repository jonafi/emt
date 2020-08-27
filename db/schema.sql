### Schema

CREATE DATABASE sequelize_library;

USE sequelize_library;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
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
  personal_email VARCHAR (30) NOT NULL,
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
DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;

USE y46i20vj5rvr19mg;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(50),
adjective VARCHAR(50),
bun VARCHAR(50),
cheese VARCHAR(50),
condiments VARCHAR(100),
toppings VARCHAR(100),
devoured BOOLEAN,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM burgers;
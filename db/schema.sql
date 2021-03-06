CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	`id` INT AUTO_INCREMENT,
	`burger_name` VARCHAR(256) NOT NULL,
	`devoured` BOOLEAN NOT NULL DEFAULT false,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;
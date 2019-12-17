DROP DATABASE IF EXISTS coding_kids;
CREATE DATABASE coding_kids;

USE coding_kids;


CREATE TABLE kids
(
    id int NOT NULL AUTO_INCREMENT,
	kid_name varchar(255) NOT NULL,
    alias varchar(255) NOT NULL,
    age int NOT NULL,
    yob int NOT NULL,
	img varchar(255),
	PRIMARY KEY
    (id)
);

CREATE TABLE parents
(
    id int NOT NULL AUTO_INCREMENT,
	parent_name varchar (255) NOT NULL,
	kid_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (kid_id) REFERENCES kids(id)
);

CREATE TABLE hobbies
(
    id int NOT NULL AUTO_INCREMENT,
	hobby varchar(255) NOT NULL,
	kid_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (kid_id) REFERENCES kids(id)
);
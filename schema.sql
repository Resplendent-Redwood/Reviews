DROP DATABASE IF EXISTS RatingsReviews;

CREATE DATABASE RatingsReviews;

USE RatingsReviews;

CREATE TABLE Reviews (
	Review_ID int NOT NULL AUTO_INCREMENT,
	Product_ID int NOT NULL,
	Rating smallint(5) NOT NULL,
	Review_Date DATE NOT NULL,
	Summary varchar(60) NOT NULL,
	Body varchar(1000) NOT NULL,
	Recommend BOOLEAN NOT NULL,
	Reported BOOLEAN NOT NULL,
	Reviewer_Name varchar(60) NOT NULL,
	Reviewer_Email varchar(60) NOT NULL,
  Response varchar(1000) NOT NULL,
	Helpfulness int,
	PRIMARY KEY (Review_ID)
);

CREATE TABLE Characteristics (
	Characteristics_ID int NOT NULL AUTO_INCREMENT,
	Product_ID int NOT NULL,
	Characteristics_Name varchar(25),
	PRIMARY KEY (Characteristics_ID)
);

CREATE TABLE Reviews_Photos (
	Photo_ID int NOT NULL AUTO_INCREMENT,
	Review_ID int NOT NULL,
	Photo_URL varchar(1000) NOT NULL,
	PRIMARY KEY (Photo_ID)
);

CREATE TABLE Characteristic_Reviews (
	Characteristic_Reviews_ID int NOT NULL AUTO_INCREMENT,
	Characteristic_ID int,
	Review_ID int,
	Characteristic_Value int,
	PRIMARY KEY (Characteristic_Reviews_ID)
);

ALTER TABLE Characteristic_Reviews ADD CONSTRAINT Characteristic_ID_fk0 FOREIGN KEY (Characteristic_ID) REFERENCES Characteristics(Characteristics_ID);

ALTER TABLE Characteristic_Reviews ADD CONSTRAINT Characteristic_ID_fk1 FOREIGN KEY (Review_ID) REFERENCES Reviews(Review_ID);

ALTER TABLE Reviews_Photos ADD CONSTRAINT Reviews_Photos_fk0 FOREIGN KEY (Review_ID) REFERENCES Reviews(Review_ID);


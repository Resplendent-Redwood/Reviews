CREATE DATABASE RatingsReviews;

CREATE TABLE ReviewSummary (
	ReviewID int NOT NULL AUTO_INCREMENT,
	ProductID int NOT NULL,
	ReviewerID int NOT NULL,
	Rating smallint(5) NOT NULL,
	Summary varchar(60) NOT NULL,
	Body TEXT(1000) NOT NULL,
	Response varchar(1000) NOT NULL,
	Date DATE NOT NULL,
	Helpfulness int NOT NULL,
	Recommend BOOLEAN(60) NOT NULL,
	PhotoURL varchar,
	PRIMARY KEY (ReviewID)
);

CREATE TABLE `Characteristics` (
	`CharacteristicID` int NOT NULL,
	`ProductID` int NOT NULL,
	`Name` varchar(60) NOT NULL,
	`Rating` smallint(5) NOT NULL,
	PRIMARY KEY (`CharacteristicID`)
);

CREATE TABLE Product (
	ProductID int NOT NULL,
	ProductName varchar NOT NULL,
	PRIMARY KEY (ProductID)
);

CREATE TABLE Reviewers (
	ReviewerID int NOT NULL AUTO_INCREMENT,
	Name varchar(60) NOT NULL,
	Verified bool NOT NULL,
	Email varchar(60) NOT NULL,
	PRIMARY KEY (ReviewerID)
);

ALTER TABLE ReviewSummary ADD CONSTRAINT ReviewSummary_fk0 FOREIGN KEY (ProductID) REFERENCES Product(ProductID);

ALTER TABLE ReviewSummary ADD CONSTRAINT ReviewSummary_fk1 FOREIGN KEY (ReviewerID) REFERENCES Reviewers(ReviewerID);

ALTER TABLE ReviewSummary ADD CONSTRAINT ReviewSummary_fk2 FOREIGN KEY (Rating) REFERENCES Review_Ratings(Rating);

ALTER TABLE ReviewSummary ADD CONSTRAINT ReviewSummary_fk3 FOREIGN KEY (Helpfulness) REFERENCES Review_Ratings(Helpfulness);

ALTER TABLE ReviewSummary ADD CONSTRAINT ReviewSummary_fk4 FOREIGN KEY (Recommend) REFERENCES Review_Ratings(Recommend);

ALTER TABLE Characteristics ADD CONSTRAINT Characteristics_fk0 FOREIGN KEY (ProductID) REFERENCES ReviewSummary(ProductID);

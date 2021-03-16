CREATE TABLE Reviews (
	Review_ID int NOT NULL AUTO_INCREMENT,
	Product_ID int NOT NULL,
	Summary varchar(60) NOT NULL,
	Body varchar(1000) NOT NULL,
	Response varchar(1000) NOT NULL,
	Date DATE NOT NULL,
	Helpfulness int NOT NULL,
	Rating smallint(5) NOT NULL,
	Recommend BOOLEAN(60) NOT NULL,
	Reviewer_Name varchar(60) NOT NULL,
	Reviewer_Verified BOOLEAN NOT NULL,
	PRIMARY KEY (Review_ID)
);

CREATE TABLE Photos (
	Photo_ID int NOT NULL AUTO_INCREMENT,
	Product_ID int NOT NULL,
	Photo_URL varchar NOT NULL,
	PRIMARY KEY (Photo_ID)
);

CREATE TABLE Products (
	Product_ID int NOT NULL,
	Product Name varchar(255) NOT NULL,
	PRIMARY KEY (Product_ID)
);

CREATE TABLE Ratings (
	Rating_ID int NOT NULL AUTO_INCREMENT,
	Rating smallint(5) NOT NULL,
	Helpfulness int NOT NULL,
	Recommend bool NOT NULL,
	PRIMARY KEY (Rating_ID)
);

CREATE TABLE Characteristics (
	Product_ID int,
	Size smallint(5),
	Width smallint(5),  
	Comfort smallint(5), 
	Length smallint(5),
	Quality smallint(5),
	Fit smallint(5) 
);

CREATE TABLE Reviewer (
	Reviewer_ID int NOT NULL AUTO_INCREMENT,
	Product_ID int NOT NULL,
	Reviewer_Name varchar(60) NOT NULL,
	Verified BOOLEAN NOT NULL,
	Email varchar(60) NOT NULL,
	PRIMARY KEY (Reviewer_ID)
);

ALTER TABLE Reviews ADD CONSTRAINT Reviews_fk0 FOREIGN KEY (Product_ID) REFERENCES Products(Product_ID);

ALTER TABLE Reviews ADD CONSTRAINT Reviews_fk1 FOREIGN KEY (Helpfulness) REFERENCES Ratings(Helpfulness);

ALTER TABLE Reviews ADD CONSTRAINT Reviews_fk2 FOREIGN KEY (Rating) REFERENCES Ratings(Rating);

ALTER TABLE Reviews ADD CONSTRAINT Reviews_fk3 FOREIGN KEY (Recommend) REFERENCES Ratings(Recommend);

ALTER TABLE Reviews ADD CONSTRAINT Reviews_fk4 FOREIGN KEY (Reviewer_Name) REFERENCES Reviewer(Reviewer_Name);

ALTER TABLE Reviews ADD CONSTRAINT Reviews_fk5 FOREIGN KEY (Reviewer_Verified) REFERENCES Reviewer(Verified);

ALTER TABLE Photos ADD CONSTRAINT Photos_fk0 FOREIGN KEY (Product_ID) REFERENCES Products(Product_ID);

ALTER TABLE Characteristics ADD CONSTRAINT Characteristics_fk0 FOREIGN KEY (Product_ID) REFERENCES Products(Product_ID);

ALTER TABLE Reviewer ADD CONSTRAINT Reviewer_fk0 FOREIGN KEY (Product_ID) REFERENCES Products(Product_ID);

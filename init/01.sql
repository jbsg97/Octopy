CREATE TABLE Octopy.users (
	user_id INT auto_increment NOT NULL,
	email varchar(191) NOT NULL,
	password varchar(255) NOT NULL,
	system_status_id INT NOT NULL,
	confirmation_code varchar(191) NOT NULL,
	confirmed_at DATETIME NULL,
	accepted_conditions_at DATETIME NULL,
	created_at DATETIME NULL,
	updated_at DATETIME NULL,
	registration_method varchar(40) NULL,
	token LONGTEXT NULL,
	recovery_password_code varchar(200) NULL,
	CONSTRAINT users_PK PRIMARY KEY (user_id)
)


CREATE TABLE Octopy.companies (
	company_id INT auto_increment NOT NULL,
	legal_name varchar(255) NULL,
	short_name varchar(255) NULL,
	account_name varchar(255) NULL,
	logo varchar(255) NULL,
	cover varchar(255) NULL,
	created_at DATETIME NULL,
	updated_at DATETIME NULL,
	CONSTRAINT companies_PK PRIMARY KEY (company_id)
)



CREATE TABLE Octopy.persons (
	persons_id INT auto_increment NOT NULL,
	name varchar(255) NULL,
	first_name varchar(255) NULL,
	last_name varchar(255) NULL,
	company_id INT NULL,
	user_id INT NULL,
	created_at DATETIME NULL,
	updated_at DATETIME NULL,
	CONSTRAINT persons_PK PRIMARY KEY (persons_id),
	CONSTRAINT persons_FK FOREIGN KEY (company_id) REFERENCES Octopy.companies(company_id),
	CONSTRAINT persons_FK_1 FOREIGN KEY (user_id) REFERENCES Octopy.users(user_id)
)

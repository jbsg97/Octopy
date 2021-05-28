<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentation

```bash
# Open swagger in browser
$ http://localhost:3000/api/

```

## MySQL SEED

```bash
# Create database as Octopy in Mysql
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

```

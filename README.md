# Quick-Credit [![Build Status](https://travis-ci.org/olamilekan000/Quick-Credit.svg?branch=develop)](https://travis-ci.org/olamilekan000/Quick-Credit) [![Coverage Status](https://coveralls.io/repos/github/olamilekan000/Quick-Credit/badge.svg)](https://coveralls.io/github/olamilekan000/Quick-Credit) [![Maintainability](https://api.codeclimate.com/v1/badges/61c8619d11889fcac011/maintainability)](https://codeclimate.com/github/olamilekan000/Quick-Credit/maintainability)

*Quick Credit is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.*

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Built Using](#built-using)
* [Installation and Configuration](#installation-and-configuration)
* [Running the Application](#running-the-application)
>- [Production Environment](#production-environment)
>- [Development Environment](#development-environment)
* [Configure Environment Variables](#configure-environment-variables)
* [Features](#features)
* [To Contribute](#to-contribute)
* [License](#license)

## Built Using

* [HTML]()
* [CSS]()
* [JavaScript]()

* [Node.js](<https://nodejs.org/en/>)
>- [express](<https://expressjs.com/>)
>- [Nodemailer](<https://nodemailer.com/>)

* [PostgreSQL](<https://www.postgresql.org/>)

## Installation and Configuration

Before Installation, ensure you have node.js and PostgreSQL installed on your device.

* Clone the Repository

```bash
git clone git@github.com:olamilekan000/Quick-Credit.git
```

* Install Dependencies

```bash
npm install
```

* Install Global Dependencies

```bash
npm install -g pm2 nodemon
```

* Configure Environment Variables
>- Configure Environment Variables as specified [Here](#configure-environment-variables)

* Setup Database
>- You are required to create database schemas as well as users as specified in the config files

## Running the Application

The Quick-Credit application can be run either from a production environment, development or testing environment.

### Production Environment

Here, most code is optimised and is difficult to debug

#### To Setup Environment

* Build files

This is only applicable in the UI directory

```bash
npm run build
```

#### To Run

* Use Run command

```bash
npm run prod
```

### Development Environment

Default debugging mode, uses nodemon to restart server as changes are made

#### To Run in Development Environment

* Open 2 terminal windows
>- Start the Back End Server

```bash
npm run dev
```

>- Start the Front End server

```bash
npm run preview
```

#### To Run Tests

* For Mac or UNIX OS

```bash
npm run test
```

* For Windows OS

```bash
npm run test:dev
```

## Configure Environment Variables

The following Environment variables need to be set and exported for application to function properly

* **JWT_TOKEN_SECRET** : JWT Token which would be used to sign and verify generated tokens

* **ISSUER** : JWT Token secret for signing and verifying a user

* **COVERALLS_REPO_TOKEN** : For Test Coverage reporting (gotten from [Coveralls](<https://coveralls.io/>))


App is hosted on [Heroku](<https://quick-credit-app.herokuapp.com/>)

## Features

The Quick-Credit API uses signed Json Web Tokens for authorization. [See Documentation - not available yet](https://github.com/olamilekan000/Quick-Credit)

Regular (Authenticated) Users to the Quick-Crdeit app can perform the following:

* Apply for a loan
* View a specific loan application
* View all repaid loans
* View all loan applications
* View all current loans - Not fully repaid
* View all current loans - Fully repaid
* View loan repayment history

Authenticated Admin Users to the Quick-Credit app can perform the folllowing (in addition to the functionalities of regular users)

* Can add new admin

* Can verify a user

* Can view a specific loan

* Can post a loan repayment transaction for a client

* Can Approve/Reject a loan


## To Contribute

Contributions are welcome.
Code should (as much as possible) conform to the [Airbnb](<https://github.com/airbnb/javascript>) javascript style guide.

* Make of fork of the repository
* Create a branch
* **Make Changes**
* Test chnages, build
* Make for Pull Request against Develop
>- Pull Requests against Master would likely be ignored

---

## License

MIT License

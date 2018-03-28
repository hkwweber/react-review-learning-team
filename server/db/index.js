'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');
const models = require('./models');

console.log(chalk.yellow("Opening database connection"));

const db = new Sequelize(`postgres://localhost:5432/meal-time`, {
  logging: false
});

module.exports = db;


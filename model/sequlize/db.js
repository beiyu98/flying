const Sequlize = require('sequelize');
const Op = Sequlize.Op;
const {host, port, username, password, database} = require('../../config').mysql;

const sequlize = new Sequlize(
  database,
  username,
  password,
  {
    host,
    port,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = {sequlize, Op};

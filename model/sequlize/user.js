const {sequlize} = require('./db');
const Sequlize = require('sequelize');

const User = sequlize.define('user', {
  name: {
    type: Sequlize.STRING
  },
  age: {
    type: Sequlize.NUMBER
  }
});

User.sync({force: false});

module.exports = User;

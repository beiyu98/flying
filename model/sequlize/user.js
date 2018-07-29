const { sequlize } = require('./db');
const { STRING, NUMBER } = require('sequelize');
const User = sequlize.define('user', {
  name: {
    type: STRING
  },
  age: {
    type: NUMBER
  }
});

User.sync({ force: false });

module.exports = User;

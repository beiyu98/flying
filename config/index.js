const { helper } = require('../utils');

const env = process.env.NODE_ENV || 'dev';
const conf = require(`./config.${env}`);
const defaultConf = require('./config.default');

module.exports = helper.extend(defaultConf, conf);

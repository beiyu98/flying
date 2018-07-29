const { extend } = require('../utils');

const env = process.env.NODE_ENV || 'dev';
const conf = require(`./config.${env}`);
const defaultConf = require('./config.default');

module.exports = extend(defaultConf, conf);

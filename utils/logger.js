const log4js = require('log4js');

const isProd = process.env.NODE_ENV === 'prod';
const appender = isProd ? 'file' : 'console';
const level = isProd ? 'info' : 'debug';
const path = require('path');

const options = {
  level: 'info',
  pm2: isProd, // pm2 install pm2-intercom
  appenders: {
    console: {
      type: 'console'
    },
    file: {
      type: 'dateFile',
      filename: path.join(process.cwd(), 'logs', 'access.log'),
      pattern: '.yyyy-MM-dd'
    }
  },
  categories: {
    default: { appenders: [appender], level }
  }
};

log4js.configure(options);

module.exports = {logger: category => log4js.getLogger(category || 'default')};

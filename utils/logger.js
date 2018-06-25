const winston = require('winston');
const env = process.env.NODE_ENV;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: []
});

if (env === 'prod') {

} else {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;

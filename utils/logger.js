const winston = require('winston');
const { combine, timestamp, label, printf, colorize } = winston.format;
const DailyRotateFile = require('winston-daily-rotate-file');
const env = process.env.NODE_ENV;

const myFormat = printf(info => {
  const splatSymbol = Object.getOwnPropertySymbols(info)[1];
  let label = info[splatSymbol];
  return `${info.timestamp} [${info.level}] [${label || info.label}]: ${info.message}`;
});

const logger = winston.createLogger({
  level: 'info',
  exitOnError: true,
  silent: false,
  format: combine(
    colorize(),
    label({ label: 'default' }),
    timestamp(),
    myFormat
  ),
  transports: []
});

if (env === 'prod') {
  logger.add(new DailyRotateFile({
    level: 'info',
    filename: 'access-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: '50m',
    maxFiles: '14d',
    dirname: './logs'
  }));
  logger.add(new DailyRotateFile({
    level: 'error',
    filename: 'error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: '50m',
    maxFiles: '14d',
    dirname: './logs'
  }));
} else {
  logger.add(new winston.transports.Console());
}

module.exports = logger;

const { api: { ok } } = require('../utils');
const logger = require('log4js').getLogger('UserController');

class UserController {
  hi (ctx) {
    logger.info('hi controller');
    ctx.body = ok('hi ~');
  }
}

module.exports = new UserController();

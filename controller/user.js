const { api: { ok }, getLogger } = require('../utils');
const logger = getLogger('UserController');

class UserController {
  hi (ctx) {
    logger.info('hi controller');
    ctx.body = ok('hi ~');
  }
}

module.exports = new UserController();

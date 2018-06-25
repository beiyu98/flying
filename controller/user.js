const {
  logger,
  api: { ok }
} = require('../utils');

class UserController {
  hi (ctx) {
    logger.info('hi controller');
    ctx.body = ok('hi ~');
  }
}

module.exports = new UserController();

const { logger, helper: { ok, fail } } = require('../utils');

class UserController {
  hi(ctx) {
    ctx.body = ok('hi ~');
  }
}

module.exports = new UserController();

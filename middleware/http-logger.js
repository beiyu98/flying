const {logger} = require('../utils');
module.exports = opts => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const path = ctx.request.path;
    const method = ctx.request.method;
    logger.info(`${method} ${path} ${Date.now() - start}ms`, 'middleware:http-logger');
  };
};

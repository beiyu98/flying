const logger = require('../utils').getLogger('middleware:http-logger');
module.exports = opts => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const path = ctx.request.path;
    const method = ctx.request.method;
    logger.info(`${method} ${path} ${Date.now() - start}ms`);
  };
};

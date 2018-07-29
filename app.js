const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
// utils
const { getLogger } = require('./utils');
const logger = getLogger('APP');

// init mysql
// require('./model/sequlize');

// init redis
// require('./model/redis');

const routes = require('./routes');
const { httpLogger } = require('./middleware');
const app = new Koa();

// global exception catch
// app.onerror(err => {
//   logger.error(err);
//   this.body = 'one error';
//   throw new Error('one error');
// });

app.use(async (ctx, next) => {
  ctx.logger = getLogger;
  await next();
});

app.on('error', (err, ctx) => {
  logger.error('----', err);
  logger.info(err.status, err.message, err.msg, err.data);
  logger.info(ctx);
  ctx.res.body = { msg: 'err', data: {} };
});

app.use(bodyParser());

app.use(httpLogger());
app.use(routes.routes(), routes.allowedMethods());
app.listen(config.port);
logger.info(`env:${process.env.Node_env}`);
logger.info(`server is running at ${config.port}`);

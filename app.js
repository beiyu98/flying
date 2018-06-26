const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const { helper: { fail } } = require('./utils');
const logger = require('log4js').getLogger('app');
const routes = require('./routes');
const onerror = require('koa-onerror');
const { httpLogger } = require('./middleware');
const app = new Koa();

onerror(app, {
  all: ctx => {
    ctx.body = fail(500, 'internal error');
  }
});

app.use(bodyParser());
app.use(httpLogger());
app.use(routes.routes(), routes.allowedMethods());
app.listen(config.port);
logger.info(`env:${process.env.Node_env}`);
logger.info(`server is running at ${config.port}`);

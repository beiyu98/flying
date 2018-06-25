const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const { logger, helper: {fail} } = require('./utils');
const routes = require('./routes');
const onerror = require('koa-onerror');

const app = new Koa();

onerror(app, {
  all: ctx => {
    ctx.body = fail(500, 'internal error');
  }
});

app.use(bodyParser());
app.use(routes.routes(), routes.allowedMethods());
app.listen(config.port);

logger.info(`server is running at ${config.port}`);

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const { logger, helper: {fail} } = require('./utils');
logger.format.label = 'app index.js';
const routes = require('./routes');
const onerror = require('koa-onerror');
const {httpLogger} = require('./middleware');
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
logger.info(`ENV:${process.env.Node_env} server is running at ${config.port}`, 'APP');
logger.error(`ENV:${process.env.Node_env} server is running at ${config.port}`, 'APP');

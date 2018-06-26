const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const onerror = require('koa-onerror');

const config = require('./config');
// utils
const { helper: { fail }, getLogger } = require('./utils');
const logger = getLogger('app');

// model
// require('./model');

const routes = require('./routes');
const { httpLogger } = require('./middleware');
const app = new Koa();

// global exception catch
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

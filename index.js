const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const {logger} = require('./utils');
const routes = require('./routes');

const app = new Koa();

app.use(bodyParser());
app.use(routes.routes(),routes.allowedMethods());
app.listen(config.port);

logger.info(`server is running at ${config.port}`);

const Application = require('../bin/application');
const { httpLogger } = require('../middleware');

const server = new Application();
server.addGlobalMiddleware(httpLogger);
server.run();

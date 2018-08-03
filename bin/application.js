const Koa = require('koa');
const path = require('path');
const debug = require('debug')('[Application]');
debug.enabled = true;
const baseDir = process.cwd();
const defaultOpts = {
  baseDir,
  port: 8090
};

module.exports = class Application extends Koa {
  constructor(opts) {
    super();
    this.opts = Object.assign({}, defaultOpts, opts);
    this.routesDir = path.join(this.opts.baseDir, 'routes');
  }
  loadAll(){
    this.loadRoutes();
  }
  addGlobalMiddleware(middleware){
    this.use(middleware);
  }
  loadRoutes() {
    debug('-----------start load routes');
    const route = require('../routes');
    this.use(route.routes(), route.allowedMethods());
    debug('-----------end load routes');
  }
  run() {
    this.loadAll();
    this.listen(this.opts.port);
    debug(`server running at ${this.opts.port}`);
  }
};

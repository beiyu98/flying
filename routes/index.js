const Router = require('koa-router');
const router = new Router();

const userRouter = require('./user');

router.use('/api',userRouter.routes());

module.exports = router;

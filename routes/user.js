const Router = require('koa-router');
const router = new Router();

const userController = require('../controller/user');

router.get('/hi', userController.hi);

module.exports = router;

const Router = require('koa-router');
const router = new Router();
const { validate } = require('../middleware');

const hiRules = {

};
router.get('/hi', validate(hiRules), async ctx => {
  ctx.body = '/api/hi';
});
router.get('/aya', async ctx => {
  ctx.body = {
    code: 200,
    data: {a: 1, b: 2},
    msg: 'success'
  };
});
router.get('/info', async ctx => {
  ctx.body = 'info';
});
module.exports = router;

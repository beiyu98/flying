const Router = require('koa-router');
const router = new Router();
const { validate } = require('../middleware');

const hiRules = {

};
router.get('/hi', validate(hiRules), async ctx => {

});
router.get('/aya', async ctx => {

});
router.get('/info', async ctx => {
  ctx.body = 'info';
});
module.exports = router;

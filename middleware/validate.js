const Joi = require('joi');
const { HttpError } = require('../lib');
/**
 * 校验http参数
 * @param {object} opts 需要校验的参数和规则
 */
module.exports = rules => {
  return async (ctx, next) => {
    const params = Object.assign(ctx.query, ctx.params, ctx.request.body);
    await validate(params, rules).catch(e => {
      throw new HttpError(422, e);
    });
    await next();
  };
};

const validate = (params, rules) => new Promise((resolve, reject) => {
  Joi.validate(params, rules, (err, value) => {
    if (err) reject(err);
    resolve(value);
  });
});

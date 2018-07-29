module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err, ctx);
    ctx.status = err.status || 500;
    ctx.body = err.message || 'SERVER INTERNAL ERROR';
  }
};

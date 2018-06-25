function ok (data = {}, msg = 'success', code = 200) {
  return { code, msg, data };
}

function fail (code = 400, msg = 'operate failed', data = {}) {
  return { code, msg, data };
}

module.exports = { ok, fail };

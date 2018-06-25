const util = require('util');

/**
 * 深拷贝合并对象
 */
function extend(target = {}, ...args) {
  let i = 0;
  const length = args.length;
  let options;
  let name;
  let src;
  let copy;
  if (!target) {
    target = Array.isArray(args[0]) ? [] : {};
  }
  for (; i < length; i++) {
    options = args[i];
    if (!options) {
      continue;
    }
    for (name in options) {
      src = target[name];
      copy = options[name];
      if (src && src === copy) {
        continue;
      }
      if (Array.isArray(copy)) {
        target[name] = extend([], copy);
      } else if (util.isObject(copy)) {
        target[name] = extend(src && util.isObject(src) ? src : {}, copy);
      } else {
        target[name] = copy;
      }
    }
  }
  return target;
}

function ok(data = {}, msg = 'success', code = 200) {
  return { code, msg, data };
}

function fail(code = 400, msg = 'operate failed', data = {}) {
  return { code, msg, data };
}

module.exports = { extend, ok, fail };
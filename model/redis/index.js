const Redis = require('ioredis');
const cacheConfig = require('../../config').cache;

const cache = new Redis(cacheConfig);

module.exports = { cache };

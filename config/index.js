const env = process.env.APP_ENV || 'development';
const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require
config.env = env;
module.exports = config;

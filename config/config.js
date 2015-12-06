var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'coda-website'
    },
    port: 3600,
  },

  test: {
    root: rootPath,
    app: {
      name: 'coda-website'
    },
    port: 3600,
  },

  production: {
    root: rootPath,
    app: {
      name: 'coda-website'
    },
    port: 3600,
  }
};

module.exports = config[env];

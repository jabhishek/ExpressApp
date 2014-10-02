'use strict';
var localEnv = require('../local.env');

// Production specific configuration
// =================================
module.exports = {

  // Server port
  port:     process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            localEnv.mongo.prodUri
  }
};
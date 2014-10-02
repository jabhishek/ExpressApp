'use strict';

// Environment variables that grunt will set when the server starts locally. Use for your api keys, secrets, etc.
// You will need to set these on the server you deploy to.
//
// This file should not be tracked by git.

module.exports = {
    SESSION_SECRET: "housePointsApp",
    mongo: {
        prodUri: 'mongodb://abhi2000:abhi1979@ds057548.mongolab.com:57548/awesomedb',
        devUri: 'mongodb://localhost:27017/theBoard',
        testUri: 'mongodb://localhost:27017/theBoardTest'
    }
};

/**
 * Created by ajain on 22/09/2014.
 */
var express = require("express");

module.exports = function (app) {
    "use strict";
    app.use('/api/users', require('./api/user'));
    app.use('/auth', require('./api/auth'));

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function(req, res) {
            res.sendfile(app.get('appPath') + '/index.html');
        });
};
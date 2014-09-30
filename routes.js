/**
 * Created by ajain on 22/09/2014.
 */
var express = require("express");
var router = express.Router();

module.exports = function (app) {
    "use strict";
    app.use(router);

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function(req, res) {
            res.sendfile(app.get('appPath') + '/index.html');
        });
};


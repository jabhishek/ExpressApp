/**
 * Created by ajain on 22/09/2014.
 */
var express = require("express");
var router = express.Router();

module.exports = function (app) {
    "use strict";
    app.use(router);

    router.get(function (req, res) {
        "use strict";
        console.log(req.params);
        res.status(404).end();
    });
};

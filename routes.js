/**
 * Created by ajain on 22/09/2014.
 */
var express = require("express");
var router = express.Router();

module.exports = function (app) {
    "use strict";
    app.use(router);
    router.get("/", function (req, res, next) {
        "use strict";
        res.send("Hello World from router!!");

    });

    router.get("/:param", function (req, res, next) {
        "use strict";
        console.log(req.params);
        res.send("Hello World with params!!");

    });
};

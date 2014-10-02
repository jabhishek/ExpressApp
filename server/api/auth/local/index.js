var express = require("express");
var router = express.Router();

// auth/local
router.post('/', function (req, res, next) {
    console.log("post");
    if (req.body.email && req.body.password) {
        // todo-abhi passport validation
        return res.json(200, {});
    }
    return res.json(401, {});
});

module.exports = router;



/**
 * Created by ajain on 22/09/2014.
 */

var express = require("express");
var router = express.Router();
var morgan = require('morgan');
var port = process.env.port || 9000;
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(require('connect-livereload')());
app.use(express.static(__dirname + "/build"));
app.set('appPath', 'build');

// setup routes
require("./server/routes")(app);

app.listen(port);

module.exports = app;
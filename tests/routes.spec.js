/**
 * Created by ajain on 26/09/2014.
 */


var assert = require("chai").assert;
var app = require('../index');
var request = require('supertest');

describe('GET /', function() {

    it('should respond with success', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});


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
            .end(function(err) {
                if (err) return done(err);
                done();
            });
    });
});

describe('GET /invalidUrl', function() {
    it('should respond with 404', function(done) {
        request(app)
            .get('/invalidUrl')
            .expect(404)
            .end(function(err) {
                if (err) return done(err);
                done();
            });
    });
});

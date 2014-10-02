var assert = require("chai").assert;
var app = require('../../../../index');
var request = require('supertest');


describe('GET /auth/local', function() {
    it('should respond with 401 if no user passed', function(done) {
        request(app)
            .post('/auth/local')
            .expect(401)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should respond with 200 if a valid user passed', function(done) {
        request(app)
            .post('/auth/local')
            .send({
                email: "aaa",
                password: "password"
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});

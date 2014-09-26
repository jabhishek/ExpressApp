/* globals describe, it, expect */

describe("App", function() {
    "use strict";
    var app;
    // Initialize the controller and a mock scope
    beforeEach(inject(function () {
        app = angular.module('HousePointsApp');
    }));

    it("to be defined", function() {
        expect(app).toBeDefined();
    });
});
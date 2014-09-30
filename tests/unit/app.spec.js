/* globals describe, it, expect */

describe('App', function() {
    'use strict';
    var app;
    // Initialize the controller and a mock scope
    beforeEach(inject(function () {
        app = angular.module('HousePointsApp');
    }));

    it('to be defined', function() {
        expect(app).toBeDefined();
    });

    describe("dependencies", function() {
        var deps, app;

        beforeEach(inject(function () {
            app = angular.module('HousePointsApp');
            deps = app.value('HousePointsApp').requires;
            console.log(deps);
        }));

        function hasModule(module) {
            return deps.indexOf(module) > -1;
        }

        it("should have ui.router as a dependency", function() {
           expect(hasModule('ui.router')).toBe(true);
        });
    })
});


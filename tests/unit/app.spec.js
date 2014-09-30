/* globals describe, it, expect */

describe('App', function () {
    'use strict';
    var app, appName;
    appName = 'HousePointsApp';
    // Initialize the controller and a mock scope
    beforeEach(inject(function () {
        app = angular.module(appName);
    }));

    it('to be defined', function () {
        expect(app).toBeDefined();
    });

    describe("dependencies", function () {
        var deps;

        beforeEach(inject(function () {
            app = angular.module(appName);
            deps = app.value(appName).requires;
            console.log(app);
        }));

        function hasModule(module) {
            return deps.indexOf(module) > -1;
        }

        it("should have ui.router as a dependency", function () {
            expect(hasModule('ui.router')).toBe(true);
        });
    });
});

describe("routes", function () {
    var app, state;
    var appName = 'HousePointsApp';
    beforeEach(module(appName));
    beforeEach(inject(function (_$state_) {
        app = angular.module(appName);
        state = _$state_;
    }));

    it("should have url / configured for state main", function () {
        console.log(state);
        expect(state.href('main')).toEqual('/');
    });
});


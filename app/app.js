
(function() {
    'use strict';
    angular.module('HousePointsApp', ['ui.router'])
        .config(function($stateProvider) {
            $stateProvider.state('main', {
                url: '/'
            });
        });
})();

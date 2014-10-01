
(function() {
    'use strict';
    angular.module('HousePointsApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'main/main.html',
                controller: 'mainController as mainVm'
            });

            $urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode(true);
        });
})();


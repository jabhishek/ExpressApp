
(function() {
    'use strict';
    angular.module('HousePointsApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'main/main.html',
                controller: 'mainController as mainVm'
            });

            $urlRouterProvider.otherwise('/');
        }]);
})();


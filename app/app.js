
(function() {
    'use strict';
    angular.module('HousePointsApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('main', {
                url: '/',
                template: '<div>{{mainVm.message}}</div>',
                controller: 'mainController as mainVm'
            });

            $urlRouterProvider.otherwise('/');
        }]);
})();


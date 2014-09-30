(function (app) {
    app.controller('mainController', [function() {
        var vm = this;
        vm.message = "Hello from controller";
    }])
})(angular.module('HousePointsApp'));
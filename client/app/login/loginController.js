(function (app) {
    'use strict';
    app.controller('loginController', [function() {
        var vm = this;
        initForm();
        vm.submit = function(valid, data) {
            if (!valid) {
                return;
            }

            console.log(valid);
            console.log(data);
        };

        function initForm() {
            vm.user = {
                email: '',
                password: ''
            };
        }
    }]);
})(angular.module('HousePointsApp'));
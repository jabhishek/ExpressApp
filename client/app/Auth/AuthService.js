(function (app) {
    'use strict';
    app.factory('AuthService', function ($http, $q) {
        var isLoggedIn = false;
        return {
            login: login,
            isLoggedIn: function () {
                return isLoggedIn;
            }
        };

        function login (user) {
            var deferred = $q.defer();
            $http.post('/auth/local', user)
                .success(function (data) {
                    isLoggedIn = true;
                    // todo-abhi - get token
                    // todo-abhi - get user
                    deferred.resolve(data);
                })
                .error(function (err) {
                    // todo-abhi - delete the token
                    isLoggedIn = false;
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    });
})(angular.module('HousePointsApp'));


(function (app) {
    'use strict';
    app.factory('AuthService', function ($http, $q) {
        var isLoggedIn = false;
        return {
            login: function (user) {
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
                        deferred.reject(err);
                    });
                return deferred.promise;
            },
            isLoggedIn: function () {
                return isLoggedIn;
            }
        };

    });
})(angular.module('HousePointsApp'));


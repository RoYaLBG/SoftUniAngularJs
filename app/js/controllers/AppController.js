'use strict';

app.controller('AppController',
    function ($scope, $rootScope, $location, userService, authService, notifyService) {
        $rootScope.pageTitle = 'My Ads';
        $scope.authService = authService;

        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);

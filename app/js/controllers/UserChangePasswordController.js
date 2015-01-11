'use strict';

app.controller('UserChangePasswordController',
    function ($scope, $rootScope, $location, userService, authService, notifyService) {
        $rootScope.pageTitle = "Change Password";

        $scope.changeUserPassword = function(adData) {
            userService.changeUserPassword(
                adData,
                function success(data) {
                    notifyService.showInfo('Successfully changed password');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Cannot change password', err);
                }
            )
        };
    }
);

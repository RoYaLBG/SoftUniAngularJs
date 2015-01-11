'use strict';

app.controller('UserProfileController',
    function ($scope, $rootScope, $location, userService, townsService, authService, notifyService) {
        $rootScope.pageTitle = "Edit Profile";

        userService.getUserProfile(function success(data) {
            $scope.adData = data;
        });

        $scope.towns = townsService.getTowns();

        $scope.changeUserPassword = function(adData) {
            userService.changeUserPassword(
                adData,
                function success(data) {
                    notifyService.showInfo('Successfully changed password');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Cannot change password');
                }
            )
        };

        $scope.editUserProfile = function(adData) {
            userService.editUserProfile(
                adData,
                function success(data) {
                    notifyService.showInfo('Successfully edited profile');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Cannot edit profile');
                }
            )
        };
    }
);

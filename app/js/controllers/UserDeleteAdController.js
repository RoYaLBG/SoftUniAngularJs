'use strict';

app.controller('UserDeleteAdController',
    function ($scope, $rootScope, $routeParams, $location, userService, notifyService) {
        $rootScope.pageTitle = "Delete";

        userService.getUserAd($routeParams.id, function(data) {
            $scope.adData = data;
        });

        $scope.deleteUserAds = function (id) {
            userService.deleteUserAd(
                id,
                function success(data) {
                    notifyService.showInfo('Successfully deleted ad');
                    $location.path('/user/ads');
                },
                function error(err) {
                    notifyService.showError('Cannot delete ad', err);
                }
            )
        };
    }
);

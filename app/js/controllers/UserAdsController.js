'use strict';

app.controller('UserAdsController',
    function ($scope, $routeParams, $location, $rootScope, userService, adsService,
              townsService, categoriesService, notifyService, pageSize) {
        $rootScope.pageTitle = "My Ads";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadUserAds = function () {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };

        $scope.deactivateUserAds = function (id) {
            userService.deactivateAd(
                id,
                function success(data) {
                    notifyService.showInfo('Successfully deactivated ad');
                    $scope.reloadUserAds();
                    $location.path('/user/ads');
                },
                function error(err) {
                    notifyService.showError('Cannot deactivate ad', err);
                }
            );
        };

        $scope.publishAgainAds = function (id) {
            userService.publishAgainAd(
                id,
                function success(data) {
                    notifyService.showInfo('Successfully published again ad');
                    $scope.reloadUserAds();
                    $location.path('/user/ads');
                },
                function error(err) {
                    notifyService.showError('Cannot publish again ad');
                }
            )
        };

        $scope.reloadUserAds();
    }
);


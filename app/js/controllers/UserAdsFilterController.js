'use strict';

app.controller('UserAdsFilterController',
    function ($scope, $routeParams, $rootScope, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.filterUserAd = function () {
            userService.filterUserAds(
                $routeParams.status,
                function success(data) {
                    $scope.ads = data;
                    notifyService.showInfo('Successfully loaded inactive ads');
                },
                function error(err) {
                    notifyService.showError('Cannot load inactive ads');
                }
            );
        };

        $scope.filterUserAd();
    }
);



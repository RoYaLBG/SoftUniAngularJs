'use strict';

app.controller('AdminEditAdController',
    function ($scope, $location, $routeParams, townsService, categoriesService,
              userService, notifyService, adminAdsService) {

        adminAdsService.findOne($routeParams.id, function(response) {
            $scope.adData = response;
        });

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.editAd = function(adData) {
            adminAdsService.edit(
                adData,
                function() {
                    notifyService.showInfo("Succesfully edited ad");
                },
                function() {
                    notifyService.showError("Error editting ad");
                }
            );
        }
    }
);

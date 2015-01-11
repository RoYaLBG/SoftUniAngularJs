'use strict';

app.controller('UserEditAdController',
    function ($scope, $rootScope, $routeParams, $location, townsService, categoriesService, userService, notifyService) {
        $rootScope.pageTitle = "Edit Ad";

        userService.getUserAd($routeParams.id, function(data) {
            $scope.adData = data;
        });

        $scope.towns = townsService.getTowns();
        $scope.categories = categoriesService.getCategories();

        $scope.editUserAds = function(adData) {
            userService.editUserAd(
                adData,
                function success(data) {
                    notifyService.showInfo('Successfully edited ad');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Cannot edit ad');
                }
            )
        };

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
    }
);

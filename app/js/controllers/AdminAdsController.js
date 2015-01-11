'use strict';

app.controller('AdminAdsController',
   function ($scope, userService, adminAdsService, userAdsService, notifyService, pageSize, $location) {
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.reloadAds = function() {
          userService.getAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load user ads", err);
              }
          );
      };

      $scope.deleteAds = function(id) {
          adminAdsService.deleteAd(
            id,
              function success() {
                  notifyService.showInfo("Success delete");
                  $location.path('/');
              },
              function error(err) {
                  notifyService.showError("Cannot delete ad", err);
              }
          );
      };

      $scope.$on("adsByType", function (event, statusClickedId) {
          $scope.personalAdsParams.status = statusClickedId;
          $scope.personalAdsParams.startPage = 1;
          $scope.getUserAds();
      });

      $scope.reloadAds();
   }
);

'use strict';

app.controller('AdminUsersController',
   function ($scope, userService, notifyService, pageSize, $location) {
        $scope.userParams = {
          'startPage' : 1,
          'pageSize' : pageSize
        };

        $scope.getAll = function() {
           userService.getAll(
               $scope.userParams,
               function success(data) {
                   $scope.userData = data;
               },
               function error(err) {
                   notifyService.showError("Cannot load users", err);
               }
           );
        };

       $scope.getOne = function(userData) {
           $scope.userData = userData;
           console.log($scope.userData);

       };

       $scope.delete = function(userName) {
            userService.delete(
                userName,
                    function success() {
                        notifyService.showInfo('Successfully deleted the user');
                    },
                    function error(err) {
                        notifyService.showError("Cannot delete user", err);
                    }
            )
       }



       $scope.getAll();
   }
);

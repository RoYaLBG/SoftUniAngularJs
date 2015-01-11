'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 5);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/user/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/user/edit-user-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/user/delete-user-ad.html',
        controller: 'UserDeleteAdController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-user-profile.html',
        controller: 'UserProfileController'
    });

    $routeProvider.when('/user/changePassword', {
        templateUrl: 'templates/user/change-user-password.html',
        controller: 'UserChangePasswordController'
    });

    $routeProvider.when('/user/ads/filter/:status', {
        templateUrl: 'templates/user/filter-user-ads.html',
        controller: 'UserAdsFilterController'
    });

    $routeProvider.when('/admin/ads/edit/:id/:title', {
        templateUrl: 'templates/admin/edit-add.html',
        controller: 'AdminEditAdController'
    });

    $routeProvider.when('/admin/ads/delete/:id', {
        controller: 'AdminAdsController'
    });

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/admin/users.html',
        controller: 'AdminUsersController'
    });

    $routeProvider.when('/admin/users/edit/:id', {
        templateUrl: 'templates/admin/edit-user.html',
        controller: 'AdminUsersController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});

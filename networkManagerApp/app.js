var app = angular.module("networkManager", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "homeController"
            })
            .when("/network", {
                templateUrl: "templates/network.html",
                controller: "networkController"
            })
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Welcome!";
    })
    .controller("networkController", function ($scope) {
        $scope.networkName = "Network 1";
    })

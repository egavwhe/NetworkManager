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
            .otherwise({
                redirectTo: "/home"
            })
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Welcome!";

    })
    .controller("networkController", function ($scope) {
        $scope.rowLimit = 8;
        $scope.nodes = nodes;
        $scope.networkName = "Network Overview";
        $scope.deleteNode = function (node) {
            var index = nodes.indexOf(node);
            if (index > -1) {
                nodes.splice(index, 1);
            }
        }
    })
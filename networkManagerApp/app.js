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
        var nodes = [
            {
                id: 1,
                type: "RBS",
                location: "Galway",
                traffic: "heavy",
                cells: [
                    {
                        range: "medium"
                    }
                ]
            },
            {
                id: 2,
                type: "LTE",
                location: "Dublin",
                traffic: "light",
                cells: [
                    {
                        range: "small"
                    }
                ]
            }
        ];
        $scope.nodes = nodes;
        $scope.networkName = "Network Overview";
        $scope.deleteNode = function (node) {
            var index = nodes.indexOf(node);
            if (index > -1) {
                nodes.splice(index, 1);
            }
        }
    })

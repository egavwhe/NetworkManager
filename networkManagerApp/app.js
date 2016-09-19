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
                type: "rbs",
                location: "Galway",
                traffic: "heavy",
                repairCost: "12000",
                installDate: new Date("January 17. 2015"),
                cells: [
                    {
                        range: "medium"
                    }
                ]
            },
            {
                id: 2,
                type: "Lte",
                location: "Dublin",
                traffic: "light",
                repairCost: "23000",
                installDate: new Date("November 17. 2012"),
                cells: [
                    {
                        range: "small"
                    }
                ]
            },
            {
                id: 3,
                type: "Lte",
                location: "Cork",
                traffic: "medium",
                repairCost: "5000",
                installDate: new Date("March 3. 2010"),
                cells: [
                    {
                        range: "small"
                    }
                ]
            },
            {
                id: 4,
                type: "eNodeB",
                location: "Belfast",
                traffic: "light",
                repairCost: "40000",
                installDate: new Date("April 10. 2016"),
                cells: [
                    {
                        range: "small"
                    }
                ]
            },
            {
                id: 5,
                type: "nodeB",
                location: "Donegal",
                traffic: "heavy",
                repairCost: "23000",
                installDate: new Date("December 1. 2009"),
                cells: [
                    {
                        range: "small"
                    }
                ]
            }
        ];
        $scope.rowLimit = 3;
        $scope.nodes = nodes;
        $scope.networkName = "Network Overview";
        $scope.deleteNode = function (node) {
            var index = nodes.indexOf(node);
            if (index > -1) {
                nodes.splice(index, 1);
            }
        }
    })

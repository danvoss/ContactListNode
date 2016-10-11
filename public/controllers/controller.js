var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http){
    console.log("Hello world from controller");

    $http.get("/contactlist").success(function(response){
      console.log("Requested data received.");
      $scope.contactlist = response;
    });

  }]);

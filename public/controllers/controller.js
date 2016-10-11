var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http){
    console.log("Hello world from controller");

    var refresh = function(){
      $http.get('/contactlist').success(function(response){
        console.log("Requested data received.");
        $scope.contactlist = response;
        $scope.contact = "";
      });
    };

    refresh();

    $scope.addContact = function(){
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function(response){
        console.log(response);
        refresh();
      });
    };

  }]);

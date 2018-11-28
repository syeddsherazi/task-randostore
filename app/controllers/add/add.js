'use strict';

angular.module('myApp.add', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/add', {
      templateUrl: 'controllers/add/add.html',
      controller: 'AddCtrl'
    });
  }])

  .controller('AddCtrl', ['$scope', '$http',
    function ($scope, $http) {
      $scope.bc = new BroadcastChannel('rando_channel');
      $scope.formData = {
        name: '',
        price: '',
        image: ''
      };

      $scope.submitForm = function () {
        $http({
          url: "http://localhost:3000/items",
          method: "POST",
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: $.param($scope.formData)
        }).then(function successCallback(response) {
          $scope.bc.postMessage({ newItem: true });
          alert('Item Successfully Added');
          $scope.resetForm($scope.formData);
        }, function errorCallback(response) {
          alert('Something wrong Occured');
        })
      }

      $scope.resetForm = function (form) {
        form.name = null;
        form.price = null;
        form.image = null;
      }
      
    }]);
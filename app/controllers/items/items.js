'use strict';

angular.module('myApp.items', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/items', {
      templateUrl: 'controllers/items/items.html',
      controller: 'ItemsCtrl'
    });
  }])

  .controller('ItemsCtrl', ['$scope', '$http', 'CartService',
    function ($scope, $http, CartService) {
      $scope.items = [];
      $scope.keyword = '';
      $scope.filteredItems = [];
      $scope.bc = new BroadcastChannel('rando_channel');
      
      $scope.getItems = function () {
      $http({
        method: 'GET',
        url: 'http://localhost:3000/items'
      })
        .then(function successCallback(response) {
          $scope.items = response.data;
          if ($scope.keyword) { // IF KEYWORD SEARCHED FILTER AFTER GETTING API RESULT
            $scope.filter();
          } else { // ELSE SET FILTERED TO ALL RETURNED
            $scope.filteredItems = $scope.items;
          }
        }, function errorCallback(response) {
          alert('Something wrong Occured');
        })
      }

      $scope.getItems();


      $scope.addToCart = function (item) {
        CartService.addItem(item);
      }

      $scope.filter = function () {
        // IF KEYWORD SEARCH FOR KEYWORD ITEMS
        var keyword = $scope.keyword;
        if (keyword) {
          var newItems = [];
          var keyword = keyword.toLowerCase();
          // create new set of items where 'keyword' exists in object data
          for (var i of $scope.items) {
            if (i.name.toLowerCase().indexOf(keyword) > -1) { newItems.push(i); }
          }
          $scope.filteredItems = newItems;
        }
        // SET FILTERED TO ALL ITEMS 
        else {
          $scope.filteredItems = $scope.items;
        }

        // IF VIEW ALREADY WRITTEN APPLY SCOPE AGAIN
        if (!$scope.$$phase) {
          $scope.$apply();
        }

      }

      // RECEIVE CART UPDATE
      $scope.bc.onmessage = function (ev) {
        if(ev && ev.data && ev.data.newItem){
          $scope.getItems();
        }
      } /* receive */ 

    }]);


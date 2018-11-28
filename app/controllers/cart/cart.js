'use strict';

angular.module('myApp.cart', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cart', {
      templateUrl: 'controllers/cart/cart.html',
      controller: 'CartCtrl'
    });
  }])

  .controller('CartCtrl', ['$scope', 'CartService', '$location',
    function ($scope, CartService, $location) {
      $scope.items = [];
      $scope.total = 0;


      $scope.getCartItems = function () {
        $scope.items = CartService.getCart();
        $scope.setCartItems();
      }

      $scope.setCartItems = function () {
        $scope.calTotal();

        // IF VIEW ALREADY WRITTEN APPLY SCOPE AGAIN
        if (!$scope.$$phase) {
          $scope.$apply();
        }

      }

      $scope.removeItem = function (index) {
        CartService.removeItem(index);
        $scope.items.splice(index, 1);
        $scope.calTotal();
      }

      $scope.calTotal = function () {
        $scope.total = 0;
        $scope.items.forEach(item => {
          $scope.total += parseFloat(item.price);
        });
      }

      $scope.checkOut = function () {
        CartService.checkOut();
        $scope.getCartItems();
        alert('Checked out Successfully!');
        $location.path("/items");
      }

      // RECEIVE CART UPDATE
      var bc = new BroadcastChannel('rando_channel');
      bc.onmessage = function (ev) {
        if (ev && ev.data && ev.data.cart) { // IF CART UPDATE MSG
          $scope.items = ev.data.cart;
          $scope.setCartItems();
        }
      }

    }]);
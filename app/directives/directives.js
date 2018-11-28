'use strict';

angular.module('myApp.directives', [])

    .directive('appMenu', ['CartService',
        function (CartService) {
            return {
                restrict: 'EA',
                templateUrl: 'directives/menu.html',
                link: function ($scope, element, attrs) {
                    $scope.cart = CartService.getCart();
                    $scope.isActiveLink = function (url) {
                        // RETURNS WHETHER MENU ITEM ACTIVE OR NOT
                        if (window.location.href.includes(url)) {
                            return true;
                        }
                        return false;
                    }

                    // RECEIVE CART UPDATE
                    var bc = new BroadcastChannel('rando_channel');
                    bc.onmessage = function (ev) {
                        $scope.cart = ev.data.cart;
                        // IF VIEW ALREADY WRITTEN APPLY SCOPE AGAIN
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    } /* receive */
                }
            };
        }]);


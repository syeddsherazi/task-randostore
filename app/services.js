'use strict';

angular.module('myApp.services', [])

.service('CartService', function () {
    var bc = new BroadcastChannel('rando_channel');

    // ADDS AN ITEM TO CARD
    this.addItem = function (item) {
      var cart = window.localStorage.getItem('cart');
      if (!cart) {
        cart = [];
      } else {
        cart = JSON.parse(cart);
      }
      cart.push(item);
      bc.postMessage({ cart: cart }); /* send */
      window.localStorage.setItem('cart', JSON.stringify(cart));
      alert('Item ' + item.name + ' added to Cart');
    }

    // REMOVES AN ITEM FROM CART
    this.removeItem = function (index) {
      var cart = window.localStorage.getItem('cart');
      if (!cart) {
        cart = [];
      } else {
        cart = JSON.parse(cart);
      }

      cart.splice(index, 1);
      bc.postMessage({ cart: cart }); /* send */
      window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    // RETURNS CART
    this.getCart = function () {
      var cart = window.localStorage.getItem('cart');
      if (!cart) {
        cart = [];
      } else {
        cart = JSON.parse(cart);
      }
      return cart;
    }

    // EMPTIES CART
    this.checkOut = function () {
      window.localStorage.removeItem('cart');
      bc.postMessage({ cart: [] }); /* send */
    }

  });



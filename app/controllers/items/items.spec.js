'use strict';

describe('myApp.items module', function() {

  beforeEach(module('myApp.items'));

  describe('Items controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var itemsCtrl = $controller('ItemsCtrl');
      expect(itemsCtrl).toBeDefined();
    }));

  });
});
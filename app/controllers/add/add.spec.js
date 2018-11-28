'use strict';

describe('myApp.add module', function() {

  beforeEach(module('myApp.add'));

  describe('Add controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var addCtrl = $controller('AddCtrl');
      expect(addCtrl).toBeDefined();
    }));

  });
});
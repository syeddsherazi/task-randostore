'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /items when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/items");
  });


  describe('items', function() {

    beforeEach(function() {
      browser.get('index.html#!/items');
    });


    it('should render items when user navigates to /items', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for items/);
    });

  });


  describe('add', function() {

    beforeEach(function() {
      browser.get('index.html#!/add');
    });


    it('should render add when user navigates to /add', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Add/);
    });

  });

  describe('cart', function() {

    beforeEach(function() {
      browser.get('index.html#!/cart');
    });


    it('should render cart when user navigates to /cart', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Cart/);
    });

  });
});

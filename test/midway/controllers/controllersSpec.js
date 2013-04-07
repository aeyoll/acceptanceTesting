'use strict';

describe("Midway: Testing Controllers", function() {

  var test, onChange;

  before(function(done) {
    ngMidwayTester.register('acceptanceTestingApp', function(instance) {
      test = instance;
      done();
    });
  });

  before(function() {
    test.$rootScope.$on('$routeChangeSuccess', function() {
      if(onChange) onChange(); 
    });
  });

  beforeEach(function(done) {
    test.reset(done);
  });

  it('should load the MainCtrl controller properly when / route is accessed', function() {
    onChange = function() {
      test.path().should.eq('/');
      var current = test.route().current;
      var controller = current.controller;
      var scope = current.scope;
      expect(controller).to.equal('MainCtrl');
    };
    test.path('/');
  });

});
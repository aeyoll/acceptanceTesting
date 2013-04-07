'use strict';

describe("Midway: Testing Modules", function() {
  describe("App Module:", function() {

    var module;
    before(function() {
      module = angular.module("acceptanceTestingApp");
    });

    it("should be registered", function() {
      expect(module).not.to.equal(null);
    });
  });
});

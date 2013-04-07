'use strict';

describe('Unit: Testing Controllers', function () {

  // load the controller's module
  beforeEach(angular.mock.module('acceptanceTestingApp'));

  it('should have a MainCtrl controller', inject(function($rootScope, $controller) {
    var $scope = $rootScope.$new();
    var ctrl = $controller('MainCtrl', {
      $scope : $scope
    });
    expect(ctrl).not.to.equal(null);
  }));

  it('should have a properly working MainCtrl controller', inject(function($rootScope, $controller, $httpBackend) {
    var response = $httpBackend.expectJSONP($rootScope.webserviceUrl);
    response.respond(null);

    var $scope = $rootScope.$new();
    var ctrl = $controller('MainCtrl', {
      $scope : $scope
    });
  }));

});

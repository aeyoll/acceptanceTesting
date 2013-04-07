'use strict';

describe('Unit: Testing Controllers', function () {

  // load the controller's module
  beforeEach(angular.mock.module('acceptanceTestingApp'));

  it('should have a MainCtrl controller', function() {
    expect(acceptanceTestingApp.MainCtrl).not.toEqual(null);
  });

  // var MainCtrl,
  //   scope;

  // // Initialize the controller and a mock scope
  // beforeEach(inject(function ($controller) {
  //   scope = {};
  //   // scope.tests = [
  //   //   {
  //   //     name:'robots.txt',
  //   //     description:'Check if file exists',
  //   //     done: false,
  //   //     status:''
  //   //   },
  //   //   {
  //   //     name:'favicon.ico',
  //   //     description:'Check if file exists',
  //   //     done: false,
  //   //     status:''
  //   //   }
  //   // ];

  //   MainCtrl = $controller('MainCtrl', {
  //     $scope: scope
  //   });
  // }));

});

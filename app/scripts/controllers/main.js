'use strict';

angular.module('acceptanceTestingApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.webserviceUrl = 'http://localhost:8888/acceptanceTestingWebservice/';

    $scope.loadTests = function () {
      $http.get($scope.webserviceUrl + 'tests').success(function (data) {
        $scope.tests = data;
      });
    };


    $scope.runTests = function () {
      // Remove http
      var url = $scope.siteUrl.replace('http://', '');
      // Remove trailing slash
      if (url.substr(-1) === '/') {
        url = url.substr(0, url.length - 1);
      }

      angular.forEach($scope.tests, function (test) {
        test.message = 'ongoing…';

        var request =  $http.get(
          $scope.webserviceUrl + test.route + url
        );

        request.then(function (status) {
          if (status.data === '1') {
            test.status = 'success';
            test.message = test.successMessage;
          }
          else {
            test.status = 'error';
            test.message = test.errorMessage;
          }
          test.done = true;
        });
      });
    };


    $scope.correct = function () {
      var count = 0;
      angular.forEach($scope.tests, function (test) {
        count += test.status === 'success' ? 1 : 0;
      });
      return count;
    };


    $scope.finished = function () {
      var count = 0;
      angular.forEach($scope.tests, function (test) {
        count += test.done ? 1 : 0;
      });
      return count;
    };

  });

'use strict';

angular.module('acceptanceTestingApp')
  .controller('MainCtrl', function ($scope, $http, $q) {
    $scope.webserviceUrl = 'http://localhost:8888/acceptanceTestingWebservice/';
    $scope.tests = [
      {
        name:'robots.txt',
        description:'Check if file exists',
        done: false,
        status:'',
        callback: function(url) {
          var request = $http.get(
            $scope.webserviceUrl+'robots/'+url
          );
          return request;
          // request.then(function(data) {
          //   console.log(data);
          // });
        }
      },
      {
        name:'favicon.ico',
        description:'Check if file exists',
        done: false,
        status:'',
        callback: function(url) {
          var request = $http.get(
            $scope.webserviceUrl+'favicon/'+url
          );
          return request;
        }
      },
      {
        name:'sitemap.xml',
        description:'Check if file exists',
        done: false,
        status:'',
        callback: function(url) {
          var request = $http.get(
            $scope.webserviceUrl+'sitemap/'+url
          );
          return request;
        }
      }
    ];

    $scope.runTests = function() {
      // Remove http
      var url = $scope.siteUrl.replace('http://', '');
      // Remove trailing slash
      if (url.substr(-1) === '/') {
        url = url.substr(0, url.length - 1);
      }

      angular.forEach($scope.tests, function(test) {
        test.status = 'ongoing…';
        var request = test.callback(url);

        request.then(function(status) {
          console.log(status);
          if (status.data === '1') {
            test.status = 'success';
          }
          else {
            test.status = 'error';
          }
          test.done = true;
        });
      });

      // promises.push(promise);

      // console.log(promises);
      // console.log($q.all(promises));
      // $q.all(promises)
      // .then(function(promises) {
      //   promises.forEach(function(promise) {
      //     console.log(promise);
      //   });
      // });
       // promise.then(function(status) {
       //    console.log(status);
       //    if (status === 'ok') {
       //      test.status = 'success';
       //    }
       //    else {
       //      test.status = 'warning';
       //    }
       //  });
       //  test.done = true;

    };


    $scope.correct = function() {
      var count = 0;
      angular.forEach($scope.tests, function(test) {
        count += test.status === 'success' ? 1 : 0;
      });
      return count;
    };


    $scope.finished = function() {
      var count = 0;
      angular.forEach($scope.tests, function(test) {
        count += test.done ? 1 : 0;
      });
      return count;
    };

  });

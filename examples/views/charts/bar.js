/*
 * Licensed under the Apache License, Version 2.0
 * See accompanying LICENSE file.
 */

angular.module('examples')

  .config(['$stateProvider',
    function($stateProvider) {
      'use strict';

      $stateProvider
        .state('bar-chart', {
          url: '/charts/bar',
          templateUrl: 'views/charts/bar.html',
          controller: 'BarChartCtrl'
        });
    }])

  .controller('BarChartCtrl', ['$scope', '$interval', '$echarts',
    function($scope, $interval, $echarts) {
      'use strict';

      var maxChartDataPoints = 30;
      $scope.barChartOption = {
        height: '140px',
        //color: 'red',
        valueLabelPosition: 'right',
        yAxisLabelFormatter: $echarts.axisLabelFormatter(),
        data: _.range(maxChartDataPoints).map(function(i) {
          return {
            x: 'Day ' + i,
            y: [
              Math.floor(Math.random() * 1000 + 50),
              Math.floor(Math.random() * 1200 + 150)]
          };
        }),
        seriesNames: ['s1', 's2']
      };
      $scope.barChartOption2 = angular.copy($scope.barChartOption);
      $scope.barChartOption2.rotate = true;
      $scope.barChartOption2.data = $scope.barChartOption2.data.slice(0, 16);

      $scope.barChartOption3 = angular.copy($scope.barChartOption);
      $scope.barChartOption3.seriesNames = ['1', '2', '3', '4'];
      $scope.barChartOption3.barMinWidth = 16;

      $scope.barUseNegativeColorOption = {
        height: '140px',
        colors: ['red', 'green'],
        valueLabelPosition: 'right',
        yAxisLabelFormatter: $echarts.axisLabelFormatter(),
        data: _.range(maxChartDataPoints).map(function(i) {
          var y = Math.floor(Math.random() * 1000 - 500);
          return {
            x: 'D' + i,
            y: y >= 0 ? [y, 0] : [0, y]
          };
        }),
        seriesNames: ['Price', 'Price']
      };

      $interval(function() {
        $scope.barChartData = _.range(maxChartDataPoints).map(function(i) {
          return {
            x: 'Day ' + i,
            y: [
              Math.floor(Math.random() * 12000 - 5000),
              Math.floor(Math.random() * 12000 - 5000),
              Math.floor(Math.random() * 12000 - 5000),
              Math.floor(Math.random() * 12000 - 5000),
              Math.floor(Math.random() * 12000 - 5000),
              Math.floor(Math.random() * 12000 - 5000)
            ]
          };
        });
        $scope.barChartData2 = _.range($scope.barChartOption2.data.length).map(function(i) {
          return {
            x: 'Day ' + i,
            y: [
              Math.floor(Math.random() * 12000 - 5000),
              Math.floor(Math.random() * 12000 - 5000)
            ]
          };
        });
      }, 3000);
    }])
;
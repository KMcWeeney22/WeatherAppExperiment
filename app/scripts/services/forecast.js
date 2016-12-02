'use strict';

/**
 * @ngdoc service
 * @name weatherAppExperimentApp.forecast
 * @description
 * # forecast
 * Factory in the weatherAppExperimentApp.
 */
angular.module('weatherAppExperimentApp')
.factory('forecast', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=7&units=imperial&APPID=86802e2763c24cd36001fa18fc96c30f', {}, {
    query: {
      method:'GET',
      params:{
        cityID: '4717560' // Paris, France ID
      },
      isArray:false
    }
  });
});

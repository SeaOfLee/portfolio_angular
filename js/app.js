angular.module('leeApp', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'pages/work.html',
      controller  : 'mainCtrl'
    })

    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutCtrl',
    })

    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactCtrl' 
    });
})

.controller('mainCtrl', function($scope) {
  $scope.message = 'Party over herrreee!';
})

.controller('aboutCtrl', function($scope) {

})

.controller('contactCtrl', function($scope) {

});


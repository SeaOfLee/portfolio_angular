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
    })

    .when('/offerup', {
      templateUrl : 'pages/offerup.html',
      controller  : 'mainCtrl'
    })

    .when('/alumly', {
      templateUrl : 'pages/alumly.html',
      controller  : 'mainCtrl'
    })

    .when('/blog', {
      templateUrl : 'pages/blog.html',
      controller  : 'mainCtrl'
    })

    .when('/tictactoe', {
      templateUrl : 'pages/tictactoe.html',
      controller  : 'mainCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });
})

.controller('mainCtrl', function($scope) {
  
  $scope.offerupSrc     = 'img/project_offerup_gray.jpg';
  $scope.offerupColor = function() {
    $scope.offerupSrc = 'img/project_offerup.jpg';
  };
  $scope.offerupGray = function() {
    $scope.offerupSrc = 'img/project_offerup_gray.jpg';
  };

  $scope.alumlySrc = 'img/project_alumly_gray.jpg';
  $scope.alumlyColor = function() {
    $scope.alumlySrc = 'img/project_alumly.jpg';
  };
  $scope.alumlyGray = function() {
    $scope.alumlySrc = 'img/project_alumly_gray.jpg';
  };

  $scope.blogSrc = 'img/project_blog_gray.jpg';
  $scope.blogColor = function() {
    $scope.blogSrc = 'img/project_blog.jpg';
  };
  $scope.blogGray = function() {
    $scope.blogSrc = 'img/project_blog_gray.jpg';
  };

  $scope.TTTSrc = 'img/project_TTT_gray.jpg';
  $scope.TTTColor = function() {
    $scope.TTTSrc = 'img/project_TTT.jpg';
  };
  $scope.TTTGray = function() {
    $scope.TTTSrc = 'img/project_TTT_gray.jpg';
  };
})

.controller('aboutCtrl', function($scope) {

})

.controller('contactCtrl', function($scope) {

});

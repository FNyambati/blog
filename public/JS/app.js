angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  /////ROUTES//////
  .state('home', {
     url: '/home',
     templateUrl: "./JS/views/home.html"
   })
   .state('feed', {
      url: '/feed',
      templateUrl: "./JS/views/feed.html"
    })
    .state('login', {
       url: '/login',
       templateUrl: "./JS/views/login.html"
     })
     .state('contact', {
        url: '/contact',
        templateUrl: "./JS/views/contact.html"
      });
 })
 //////DIRECTIVES/////////
 .directive('navDir', function() {
  return {
    templateUrl:'./JS/directives/navDirTmpl.html',
    restrict: 'E'
  };
});

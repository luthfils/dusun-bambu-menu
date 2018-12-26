angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('page1', {
    url: '/1',
    templateUrl: 'page1.html'
  })
  .state('page2', {
    url: '/2',
    templateUrl: 'page2.html'
  })
  .state('page3', {
    url: '/3',
    templateUrl: 'page3.html',
  })
  .state('page4', {
    url: '/4',
    templateUrl: 'page4.html',
  })
  .state('page5', {
    url: '/5',
    templateUrl: 'page5.html',
  })
  .state('page6', {
    url: '/6',
    templateUrl: 'page6.html',
  })
  .state('page7', {
    url: '/7',
    templateUrl: 'page7.html',
  })
  
  $urlRouterProvider.otherwise("/1");
})


(function() {
  'use strict';

  angular
    .module('web')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "": {
            controller: 'MainController',
            controllerAs: 'vm',
            templateUrl: 'app/main/main.html'
          },
          "acme-navbar": {
            template: "<acme-navbar></acme-navbar>"
          },
          "menu": {
            template: "<menu></menu>"
          },
          "historycenter": {
            template: "<historycenter></historycenter>"
          }
        },
        resolve: {
          transactions: function(firebaseDataService, $firebaseArray) {
            return $firebaseArray(firebaseDataService.transactions).$loaded();  
          },
          currentAuth: function(Auth) {
          // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.$waitForAuth()
          }
        }
        

      })

      .state('graph', {
        url: '/graph',
        views: {
          "": {
            controller: 'MainController',
            controllerAs: 'vm',
            templateUrl: 'app/main/main.html'
          },
          "acme-navbar": {
            template: "<acme-navbar></acme-navbar>"
          },
          "menu": {
            template: "<menu></menu>"
          },
          "historycenter": {
            template: "<historycenter></historycenter>"
          }
        },
        resolve: {
          transactions: function(firebaseDataService, $firebaseArray) {
            return $firebaseArray(firebaseDataService.transactions).$loaded();  
          }
        }

      })

      .state('login', {
        url: '/login',
        views: {
          "": {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
          },
          "acme-navbar": {
            template: "<acme-navbar></acme-navbar>"
          }
        }
      })

    $urlRouterProvider.otherwise('/');
  }

})();

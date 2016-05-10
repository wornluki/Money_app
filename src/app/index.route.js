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
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        resolve: {
          transactions: function(firebaseDataService, $firebaseArray) {
            return $firebaseArray(firebaseDataService.transactions).$loaded();  
          }
        }

      });

    $urlRouterProvider.otherwise('/');
  }

})();

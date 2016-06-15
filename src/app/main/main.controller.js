(function() {
  'use strict';

  angular
    .module('web')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(transactions) {
    var vm = this;

    vm.transactions = transactions;
    console.log(transactions);
    
  }
})();

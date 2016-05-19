(function() {
  'use strict';

  angular
    .module('web')
    .directive('historycenter', historycenter);

  /** @ngInject */
  function historycenter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/historyCenter/historycenter.html',
      controller: historycenterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function historycenterController($scope, firebaseDataService) {
      var vm = this;

      vm.removeCustomClass = removeCustomClass;
      vm.addCustomClass = addCustomClass;
      vm.addItem = addItem;

      function removeCustomClass() {
        angular.element(document.querySelector("#panel")).removeClass("hidden");
      }
      function addCustomClass() {
        angular.element(document.querySelector("#panel")).addClass("hidden");

      }

      function addItem() {
        var iRef = firebaseDataService.transactions;
 
        iRef.child(vm.name).set({
          name: vm.name,
          category: vm.category,
          price: vm.price
        })

        vm.text = "";
      }
    }
  }

})();

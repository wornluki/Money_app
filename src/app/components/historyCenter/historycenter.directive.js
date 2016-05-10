(function() {
  'use strict';

  angular
    .module('web')
    .directive('historycenter', historycenter);

  /** @ngInject */
  function historycenter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/historycenter/historycenter.html',
      controller: historycenterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function historycenterController() {
      //var vm = this;

    }
  }

})();

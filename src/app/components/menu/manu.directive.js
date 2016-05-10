(function() {
  'use strict';

  angular
    .module('web')
    .directive('menu', menu);

  /** @ngInject */
  function menu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/menu/menu.html',
      scope: {
          creationDate: '='
      },
      controller: MenuController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MenuController() {

    }
  }

})();

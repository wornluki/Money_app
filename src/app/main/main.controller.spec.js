(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('web'));
    beforeEach(inject(function(_$controller_, _$timeout_, _webDevTec_, _toastr_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('MainController');
    }));

    it('should have currency on price', function() {
      expect(vm.transactions.price).toEqual(jasmine.any(Number));
    });

    it('should have items from firebase', function() {
      expect(angular.isArray(vm.transactions)).toBeTruthy();
      expect(vm.transactions.length =<1).toBeTruthy();
    });
  });
})();

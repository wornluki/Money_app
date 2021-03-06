(function () {
  'use strict';

  angular
    .module('web')
    .factory('firebaseDataService', firebaseDataService);

  firebaseDataService.$inject = ['FIREBASE_URL'];

  function firebaseDataService(FIREBASE_URL) {
    var root = new Firebase(FIREBASE_URL);

    var service = {
      root: root,
      users: root.child('users'),
      transactions: root.child('transactions')
    };

    return service;
  }



})();
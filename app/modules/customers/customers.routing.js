'use strict';

function config($stateProvider) {
  $stateProvider
    .state('customers', {
      url: '/customers',
      templateUrl: 'modules/customers/customers.html',
      controller: 'CustomersController',
      controllerAs: 'vm',
      resolve: {
        Customers: ['CustomersApi', function (CustomersApi) {
          return CustomersApi
            .getAll()
            .then(function (response) {
              return response.data;
            });
        }]
      }
    });
}

config.$inject = ['$stateProvider'];

export default config;
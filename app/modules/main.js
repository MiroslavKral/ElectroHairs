import './vendor'
import customers from 'modules/customers/customers.module'

let mainModule = angular
  .module('mainApp', [
    'ui.router',
    customers.name
  ])
  .config([
    '$urlRouterProvider',
    function ($urlRouterProvider) {
      $urlRouterProvider
        .when('', '/customers')
        .otherwise('/customers');
    }
  ]);

export default mainModule;
'use strict';

import CustomersRouting from 'modules/customers/customers.routing'
import CustomersController from 'modules/customers/customers.controller'
import CustomersApi from 'modules/customers/customers.api'

let customers = angular
  .module('customers', [
    'ui.router'
  ])
  .config(CustomersRouting)
  .controller('CustomersController', CustomersController)
  .service('CustomersApi', CustomersApi);

export default customers;

import Lazy from 'lazy'

'use strict';

class CustomersController {

  constructor(Customers) {
    this.customers = Customers.customers;

    Lazy(this.customers)
      .each(function (c) {
        console.log(c.surname.normalize('NFD'));
      });

    this.filter = '';
  }

}

CustomersController.$inject = ['Customers'];

export default CustomersController;
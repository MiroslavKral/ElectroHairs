class CustomersApi {

  constructor($http) {
    this.$http = $http;
  }

  getAll() {
    return this.$http.get('modules/customers/customers.json');
  }

}

CustomersApi.$inject = ['$http'];

export default CustomersApi;
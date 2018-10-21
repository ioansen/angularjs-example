// Define the `EmployeeListController` controller on the `employeeList` module
angular.module('employeeList')
    .controller('EmployeeListController', ['$http', function EmployeeListController($http) {
        var self = this;
        self.orderProp = 'id';

        $http.get('employees/employees.json').then(function(response) {
            self.employees = response.data;
        });
}]);
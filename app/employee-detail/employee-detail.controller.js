'use strict';
// Define the `EmployeeDetailController` controller on the `employeeDetail` module
angular.module('employeeDetail')
    .controller('EmployeeDetailController', ['$routeParams', 'Employee',
        function EmployeeDetailController($routeParams, Employee) {
            var self = this;
            self.id = $routeParams.id;

            Employee.read($routeParams.id)
                .then(function (response) {
                    self.employee = response.data;
                });
        }
    ]);
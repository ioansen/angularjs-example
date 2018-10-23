'use strict';
// Define the `EmployeeDetailController` controller on the `employeeDetail` module
angular.module('employeeDetail')
    .controller('EmployeeDetailController', ['$stateParams', 'Employee',
        function EmployeeDetailController($stateParams, Employee) {
           /* var self = this;
            self.id = $stateParams.id;

            Employee.read(self.id)
                .then(function (response) {
                    self.employee = response.data;
                });*/
        }
    ]);
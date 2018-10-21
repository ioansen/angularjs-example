'use strict';
// Define the `EmployeeDetailController` controller on the `employeeDetail` module
angular.module('employeeDetail')
    .controller('EmployeeDetailController', ['$routeParams',
        function EmployeeDetailController($routeParams) {
            this.id = $routeParams.id;
        }
    ]);
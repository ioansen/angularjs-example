'use strict';

// Register `employeeList` component, along with its associated controller and template
angular.module('employeeList')
    .component('employeeList', {
        bindings: {employees: '<'},
        templateUrl: "employee-list/employee-list.template.html",
        controller: "EmployeeListController"
});


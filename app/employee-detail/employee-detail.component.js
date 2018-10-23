'use strict';

angular.module('employeeDetail').
    component('employeeDetail', {
        bindings: { employee: '<' },
        templateUrl: "employee-detail/employee-detail.template.html",
        /*controller: 'EmployeeDetailController'*/
});
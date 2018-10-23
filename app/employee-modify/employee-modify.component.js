angular.module('employeeModify').
component('employeeModify', {
    bindings: {
        onModify: '&',
        employee: '<'
    },
    templateUrl: "employee-add/employee-add.template.html",
    controller: 'EmployeeModifyController'
});
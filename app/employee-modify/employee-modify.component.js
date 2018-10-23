angular.module('employeeModify').
component('employeeModify', {
    bindings: { employee: '<' },
    templateUrl: "employee-add/employee-add.template.html",
    controller: 'EmployeeModifyController'
});
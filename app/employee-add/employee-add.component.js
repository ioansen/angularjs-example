angular.module('employeeAdd').
component('employeeAdd', {
    bindings: {
        onAdd: '&'
    },
    templateUrl: "employee-add/employee-add.template.html",
    controller: 'EmployeeAddController'
});
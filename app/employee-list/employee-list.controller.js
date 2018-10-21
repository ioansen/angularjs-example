// Define the `EmployeeListController` controller on the `employeeList` module
angular.module('employeeList')
    .controller('EmployeeListController', function EmployeeListController() {
        this.employees = [
            {
                id: 1,
                name: 'Daniel',
                lastname: 'Mateianu',
                salary: 4500
            }, {
                id: 2,
                name: 'Marian',
                lastname: 'Duca',
                salary: 2500
            }, {
                id: 3,
                name: 'Rasca',
                lastname: 'Irideanu',
                salary: 7000
            },
        ];
});
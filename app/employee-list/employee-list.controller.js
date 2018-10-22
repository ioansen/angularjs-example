// Define the `EmployeeListController` controller on the `employeeList` module
angular.module('employeeList')
    .controller('EmployeeListController', ['Employee', function EmployeeListController(Employee) {
        var self = this;
        self.orderProp = 'id';

        Employee.list()
            .then(function (response) {
                self.employees = response.data;
                control.log(self.employees);
            });
        
        self.delete = function (id) {
            console.log("employee deleted");
            Employee.delete(id);
        }
}]);
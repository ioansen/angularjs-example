angular.module('employeeAdd')
    .controller('EmployeeAddController',
        ['$location', 'Employee', function EmployeeListController($location, Employee) {
        var self = this;
        self.action = 'Add';

        self.post = function(){
            Employee.create(self.employee);
            console.log("employee created");
            $location.path("#/employees/");
        };
    }]);
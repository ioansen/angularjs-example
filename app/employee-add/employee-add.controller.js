angular.module('employeeAdd')
    .controller('EmployeeAddController',
        ['Employee', function EmployeeListController(Employee) {
        var self = this;
        self.action = 'Add';

        self.reset = function(){
            self.employee.name = '';
            self.employee.lastname = '';
            self.employee.salary = 4500;
            self.employee.dep = 'it';
            self.employee.job = '';
        };

        self.post = function(){
            Employee.create(self.employee).then(
            function success(resp) {
                console.log(resp.data.message);
                self.employee.id = resp.data.id;
                self.onAdd({'e': angular.copy(self.employee)});
                self.reset();
                //$state.reload();
            },
            function error(resp) {
                console.error(resp.data);
            });

        };
    }]);
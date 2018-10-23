angular.module('employeeAdd')
    .controller('EmployeeAddController',
        ['$state', 'Employee', function EmployeeListController($state, Employee) {
        var self = this;
        self.action = 'Add';

        self.post = function(){
            Employee.create(self.employee).then(
            function success(resp) {
                console.log(resp.data.message);
                $state.reload();
            },
            function error(resp) {
                console.error(resp.data);
            });

        };
    }]);
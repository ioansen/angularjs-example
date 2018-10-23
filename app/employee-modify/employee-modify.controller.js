angular.module('employeeModify')
    .controller('EmployeeModifyController',
        ['$state','Employee',
            function EmployeeListController($state, Employee) {
                var self = this;
                self.action = 'Modify';
                self.showId = true;

                self.post = function(){
                    Employee.update(self.employee).then(function success(resp) {
                        console.log(resp.data.message);
                        //self.onModify({'e': angular.copy(self.employee)});
                        $state.go('employees', {}, {reload: true});
                    });

                };
        }]);